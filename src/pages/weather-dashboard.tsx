import { RefreshCcw } from "lucide-react";
import { Button } from "../components/ui/button";

const WeatherDashboard = () => {
  return (
    <div>
      {/* Favourite Cities */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight">My Location</h1>
        <Button
          variant={"outline"}
          size={"icon"}
          // onClick={handlerRefresh}
          // disabled = {}
        >
          <RefreshCcw className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default WeatherDashboard;
