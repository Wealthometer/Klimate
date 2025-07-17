import type { WeatherData } from "../api/types";
import { Sunrise, Sunset } from "lucide-react";
import { format } from "date-fns";
console.timeStamp();

interface WeatherDetailsProps {
  data: WeatherData;
}

const WeatherDetails = ({ data }: WeatherDetailsProps) => {
  
    const { wind, main, sys } = data;

    const formatTime = (timeStamp : number) => {
        return format(new Date(timeStamp * 1000), "h:mm a")
    }

    const details = [
        {
            title : "Sunrise",
            value : formatTime(sys.sunrise),
            icon : Sunrise,
            color : "text-orange-500"
        },
        {
            title : "Sunset",
            value : formatTime(sys.sunset),
            icon : Sunset,
            color : "text-blue-500"
        }
    ]

  return <div> WeatherDetails</div>;
};

export default WeatherDetails;
