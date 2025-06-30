import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="text-center">
      <h1 className="pt-12 text-5xl text-red-600">404</h1>
      <h1 className="py-10 text-4xl">Page not Found</h1>
      <a
        className="text-blue-600 underline"
        onClick={() => navigate("/Multistep-Form/info")}
      >
        Return to home page
      </a>
    </div>
  );
}
