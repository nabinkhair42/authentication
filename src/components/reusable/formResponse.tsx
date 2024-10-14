import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2Icon, AlertTriangleIcon } from "lucide-react";

interface FormFeedbackProps {
  message?: string;
  type: "success" | "error";
}

export const FormFeedback = ({ message, type }: FormFeedbackProps) => {
  const isSuccess = type === "success";
  return (
    <Alert variant={isSuccess ? "success" : "destructive"} className="mt-4">
      {isSuccess ? (
        <CheckCircle2Icon className="h-4 w-4" />
      ) : (
        <AlertTriangleIcon className="h-4 w-4" />
      )}
      <AlertTitle>{isSuccess ? "Success" : "Error"}</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};

export const FormSuccess = ({ message }: { message?: string }) => (
  <FormFeedback type="success" message={message} />
);

export const FormError = ({ message }: { message?: string }) => (
  <FormFeedback type="error" message={message} />
);
