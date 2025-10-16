export default function Footer() {
  return (
    <footer className="w-full py-5 text-center px-3 border-t border-gray-200 bg-white">
      <p className="text-gray-500 text-sm">
        An{" "}
        <a
          className="font-semibold text-gray-600 underline-offset-4 transition-colors hover:underline"
          href="#"
          target="_blank"
        >
          open-source
        </a>{" "}
        project built by{" "}
        <a
          className="font-semibold text-gray-600 underline-offset-4 transition-colors hover:underline"
          href="https://github.com/mikepn02"
          target="_blank"
        >
          Mike Nzabera
        </a>
      </p>
    </footer>
  );
}
