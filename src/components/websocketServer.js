import { useEffect, useMemo } from "react";

const ExampleComponent = () => {
  const ws = useMemo(() => new WebSocket("ws://your-websocket-url"), []);

  useEffect(() => {
    ws.onopen = () => {
      console.log("WebSocket connected");
    };

    return () => {
      ws.close();
    };
  }, [ws]);

  return <div>Example Component</div>;
};
