import Logo from "./LogoC";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row gap-3">
          <div className="col-lg col-md-12">
            <Logo />
            <p>© COPYRIGHT {new Date().getFullYear()} BETJUICY.COM</p>
          </div>
          <div className="col-lg col-md-12">
            <ul className="d-flex flex-column gap-3">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Bonuses</a>
              </li>
              <li>
                <a href="">Decide</a>
              </li>
              <li>
                <a href="">LeaderBorad</a>
              </li>
              <li>
                <a href="">Gadom</a>
              </li>
            </ul>
          </div>
          <div className="col-lg col-md-12"></div>
          <div className="col-lg col-md-12">
            <div className="row justify-content-end-lg">
              <div className="col-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="32"
                  fill="currentColor"
                  viewBox="0 0 28 32"
                >
                  <path
                    fill="currentColor"
                    d="M12.4 14.325a.5.5 0 0 1 .764-.425l2.707 1.675a.5.5 0 0 1 0 .85L13.162 18.1a.5.5 0 0 1-.763-.426v-3.35Z"
                  ></path>
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M15.212.33a2.397 2.397 0 0 0-2.424 0L1.212 7.1A2.463 2.463 0 0 0 0 9.23v13.543c0 .877.462 1.688 1.212 2.127l11.576 6.772c.75.439 1.674.439 2.424 0l11.576-6.772A2.463 2.463 0 0 0 28 22.771V9.23c0-.878-.462-1.69-1.212-2.128L15.212.329ZM14.052 10l-.194.001c-.952.004-1.904.022-2.856.055l-.17.007-.259.01-.17.007c-1.11.053-2.167.139-2.654.278-.34.098-.65.29-.897.556a2.182 2.182 0 0 0-.518.96c-.101.404-.172.943-.22 1.497l-.01.11-.022.278-.008.111-.003.056-.007.11A37.226 37.226 0 0 0 6 15.934v.132c.005.725.033 1.45.082 2.174l.016.223c.05.61.124 1.218.235 1.663.09.363.27.694.518.96s.558.457.897.555c.487.141 1.544.226 2.654.278l.342.015.087.004.17.007c1.34.049 2.619.055 2.928.055h.141c.611-.001 5.02-.025 6.18-.358.34-.098.65-.29.898-.556.249-.266.427-.597.518-.96.111-.446.185-1.053.235-1.663l.009-.111.008-.113A36.56 36.56 0 0 0 22 16.04v-.08a36.83 36.83 0 0 0-.074-2.09l-.008-.11-.022-.278-.01-.111c-.048-.554-.119-1.091-.22-1.497a2.185 2.185 0 0 0-.518-.96 1.985 1.985 0 0 0-.897-.556c-1.123-.323-5.288-.355-6.11-.358h-.09Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="col-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="32"
                  fill="currentColor"
                  viewBox="0 0 28 32"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M15.212.33a2.397 2.397 0 0 0-2.424 0L1.212 7.1A2.463 2.463 0 0 0 0 9.23v13.543c0 .877.462 1.688 1.212 2.127l11.576 6.772c.75.439 1.674.439 2.424 0l11.576-6.772A2.463 2.463 0 0 0 28 22.771V9.23c0-.878-.462-1.69-1.212-2.128L15.212.329ZM22 10.661a7.371 7.371 0 0 1-1.645 1.827c.01.153.01.306.01.46 0 4.67-3.299 10.051-9.33 10.051A8.79 8.79 0 0 1 6 21.414a6.3 6.3 0 0 0 .792.044c1.533 0 2.944-.558 4.071-1.51-1.442-.032-2.65-1.05-3.066-2.45.203.033.406.055.62.055.294 0 .588-.044.862-.12-1.502-.328-2.63-1.75-2.63-3.467v-.044c.437.262.945.426 1.483.448-.883-.634-1.462-1.717-1.462-2.942 0-.656.162-1.258.447-1.783 1.614 2.144 4.04 3.544 6.761 3.697a4.289 4.289 0 0 1-.081-.81c0-1.946 1.462-3.532 3.28-3.532.943 0 1.796.427 2.395 1.116a6.181 6.181 0 0 0 2.081-.854 3.489 3.489 0 0 1-1.441 1.947c.66-.076 1.3-.273 1.888-.546Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="col-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="32"
                  fill="currentColor"
                  viewBox="0 0 28 32"
                >
                  <path
                    fill="currentColor"
                    d="M9.91 16.149c0 .946.648 1.718 1.437 1.718.801 0 1.438-.772 1.438-1.718.012-.941-.63-1.72-1.438-1.72-.8 0-1.438.772-1.438 1.72ZM15.225 16.149c0 .946.65 1.718 1.438 1.718.807 0 1.438-.772 1.438-1.718.013-.941-.631-1.72-1.438-1.72-.8 0-1.438.772-1.438 1.72Z"
                  ></path>
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M15.212.33a2.397 2.397 0 0 0-2.424 0L1.212 7.1A2.463 2.463 0 0 0 0 9.23v13.543c0 .877.462 1.688 1.212 2.127l11.576 6.772c.75.439 1.674.439 2.424 0l11.576-6.772A2.463 2.463 0 0 0 28 22.771V9.23c0-.878-.462-1.69-1.212-2.128L15.212.329ZM16.288 9a12.638 12.638 0 0 1 3.269 1.086.035.035 0 0 1 .008.013c1.807 2.832 2.7 6.027 2.366 9.706a.054.054 0 0 1-.021.04 12.942 12.942 0 0 1-4.001 2.152.047.047 0 0 1-.031 0 .051.051 0 0 1-.025-.02 11.495 11.495 0 0 1-.817-1.416.057.057 0 0 1 .009-.064.05.05 0 0 1 .018-.012c.432-.173.85-.385 1.249-.633a.053.053 0 0 0 .018-.019.057.057 0 0 0-.014-.072 6.95 6.95 0 0 1-.248-.208.05.05 0 0 0-.053-.007c-2.587 1.275-5.422 1.275-8.04 0-.01-.004-.018-.005-.027-.004a.048.048 0 0 0-.025.011c-.08.07-.164.141-.248.208a.054.054 0 0 0-.015.02.056.056 0 0 0-.003.04.053.053 0 0 0 .023.03c.4.247.817.459 1.248.635a.05.05 0 0 1 .018.012.057.057 0 0 1 .01.063c-.236.496-.51.969-.818 1.416a.05.05 0 0 1-.025.02.047.047 0 0 1-.03 0 12.983 12.983 0 0 1-3.996-2.153.06.06 0 0 1-.02-.04c-.28-3.18.29-6.403 2.363-9.706a.042.042 0 0 1 .021-.02 12.55 12.55 0 0 1 3.257-1.077c.01-.002.02 0 .03.004.01.005.017.013.022.022.153.288.29.584.412.888a11.445 11.445 0 0 1 3.658 0c.11-.273.265-.621.406-.888a.051.051 0 0 1 .022-.022.047.047 0 0 1 .03-.004Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}