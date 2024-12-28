import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_URL = "http://localhost:9090/data";

export const useSpaces = () =>
  useQuery({
    queryKey: ["spaces"],
    queryFn: async () => {
      const { data } = await axios.get(`${API_URL}`);
      return data;
    },
  });

export const useSpaceDetails = (spaceId: string) =>
  useQuery({
    queryKey: ["spaceDetails", spaceId],
    queryFn: async () => {
      const { data } = await axios.get(`${API_URL}/${spaceId}`);
      return data;
    },
    enabled: !!spaceId,
  });
