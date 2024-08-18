export default function PortalFooterCard() {
  return (
    <>
      <footer className="bg-white m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-center">
          <div className="text-sm text-gray-500 text-center dark:text-gray-400">
            © 2024{" "}
            <a href="/" className="hover:underline">
              veera.obulareddy@gmail.com,{" "}
            </a>
          </div>
          <div className="text-sm text-gray-500 text-center dark:text-gray-400">
            {" "}
            All Rights Reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
