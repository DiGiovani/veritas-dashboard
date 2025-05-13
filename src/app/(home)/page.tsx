export default function Home() {
  return (
    <div className="flex flex-col w-dvw min-h-dvh">
      <div
        className="flex w-full h-[calc(100dvh-96px)]"
        style={{
          backgroundImage: "url('/caminhonete.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="flex px-64 items-center justify-center w-full h-full"
          style={{
            backdropFilter: "blur(5px)",
            background: "rgba(0,0,0,0.25)",
          }}
        >
          <h1 className="text-7xl font-bold text-center text-gray-900 dark:text-gray-100 text-sans">
            A verdade na proteção.
            <br />A força na entrega
          </h1>
        </div>
      </div>
    </div>
  );
}
