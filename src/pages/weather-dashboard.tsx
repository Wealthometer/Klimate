import { AlertTriangle, MapPin, RefreshCcw, Terminal } from "lucide-react";
import { Button } from "../components/ui/button";
import { useGeolocation } from "../hooks/usegeolocation";
import WeatherSkeleton from "../components/loading-skelenton";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import {
  useForecastQuery,
  useReverseGeocodeQuery,
  useWeatherQuery,
} from "../hooks/use-weather";

const WeatherDashboard = () => {
  const {
    coordinates,
    error: locationError,
    getLocation,
    isLoading: locationLoading,
  } = useGeolocation();

  const weatherQuery = useWeatherQuery(coordinates);
  const forecastQuery = useForecastQuery(coordinates);
  const locationQuery = useReverseGeocodeQuery(coordinates);

  // console.log(weatherQuery.data);
  // console.log(locationQuery);
  // console.log(coordinates);
  // console.log(getLocation);
  // console.log(error);
  // console.log(isLoading);

  const handlerRefresh = () => {
    getLocation();
    if (coordinates) {
      weatherQuery.refetch();
      forecastQuery.refetch();
      locationQuery.refetch();
    }
  };

  if (locationLoading) {
    return <WeatherSkeleton />;
  }

  if (locationError) {
    return (
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <Terminal />
        <AlertTitle>Location Error</AlertTitle>
        <AlertDescription className="flex flex-col gap-4 ">
          <p>{locationError}</p>
          <Button onClick={getLocation} variant={"outline"} className="w-fit">
            <MapPin className="mr-2 h-4 w-4" />
            Enable Location
          </Button>
        </AlertDescription>
      </Alert>
    );
  }

  if (!coordinates) {
    return (
      <Alert variant="destructive">
        <AlertTitle>Location Required</AlertTitle>
        <AlertDescription className="flex flex-col gap-4 ">
          <p>Please Enable Location Access To See Your Local Weather.</p>
          <Button onClick={getLocation} variant={"outline"} className="w-fit">
            <MapPin className="mr-2 h-4 w-4" />
            Enable Location
          </Button>
        </AlertDescription>
      </Alert>
    );
  }

  const locationName = locationQuery.data?.[0];

  if (weatherQuery.error || forecastQuery.error) {
    return (
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <Terminal />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription className="flex flex-col gap-4 ">
          <p>Failed To Fetch Weather Data. Pls Try Again</p>
          <Button onClick={handlerRefresh} variant={"outline"} className="w-fit">
            <RefreshCcw className="mr-2 h-4 w-4" />
            Retry
          </Button>
        </AlertDescription>
      </Alert>
    );
  }

  if (!weatherQuery.data || !forecastQuery.data) {
    return <WeatherSkeleton />;
  }

  return (
    <div>
      {/* Favourite Cities */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight">My Location</h1>
        <Button
          variant={"outline"}
          size={"icon"}
          onClick={handlerRefresh}
          disabled = {weatherQuery.isFetching || forecastQuery.isFetching}
        >
          <RefreshCcw className={`h-4 w-4 ${weatherQuery.isFetching ? "animate-spin" : ""}`} />
        </Button>
      </div>
    </div>
  );
};

export default WeatherDashboard;
