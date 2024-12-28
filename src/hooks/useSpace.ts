import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const useSpaces = () =>
  useQuery({
    queryKey: ["spaces"],
    queryFn: async () => {
      const { data } = await axios.get(`${API_URL}/data.json`);
      return data.data;
    },
  });

export const useSpaceDetails = (spaceId: string) =>
  useQuery({
    queryKey: ["spaceDetails", spaceId],
    queryFn: async () => {
      const { data } = await axios.get(`${API_URL}/${spaceId}`);
      return data.data;
    },
    enabled: !!spaceId,
  });
