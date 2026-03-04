import { useMutation } from "@tanstack/react-query";
import { api, type MessageInput, type MessageResponse } from "@shared/routes";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export function useCreateMessage() {
  const { toast } = useToast();

  return useMutation<MessageResponse, Error, MessageInput>({
    mutationFn: async (data: MessageInput) => {
      const res = await apiRequest("POST", api.messages.create.path, data);
      return await res.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I will get back to you soon.",
        variant: "default",
      });
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });
}
