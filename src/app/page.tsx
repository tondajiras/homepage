import { list } from "postcss";

export default function Home() {
  return (
    <div className="flex items-center flex-col gap-96">
      <h1 className="text-8xl text-slate-700 m-8">Homepage</h1>
      <ul className="list-disc list-inside pl-5">
        <li style={{ display: "list-item" }}>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#end">End</a>
        </li>
      </ul>
      <p id="about">about</p>
      <p id="end" className="mb-[900px]">
        to uz je vsechno
      </p>
    </div>
  );
}
