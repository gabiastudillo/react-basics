const SidebarModules = () => {
  return (
    <>
      {/* Vertical sidebar that changes to navbar on mobile using only bootstrap classes */}
      <div className="col-sm-auto sticky-top p-1 bg-dark">
        <div
          className="d-flex flex-sm-column flex-row flex-nowrap sticky-top"
        >
          <div
            className="nav nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto "
          >
            <button
              href="google.com"
              className="btn btn-secondary my-1 mx-2 m-md-1 py-2 px-4 px-md-2"
              title=""
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="Inventory"
            >
              <i className="fas fa-warehouse"></i>
            </button>
            <button
              href="google.com"
              className="btn btn-secondary my-1 mx-2 m-md-1 py-2 px-4 px-md-2"
              title=""
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="Analytics"
            >
              <i className="fas fa-chart-pie"></i>
            </button>
            <button
              href="google.com"
              className="btn btn-secondary my-1 mx-2 m-md-1 py-2 px-4 px-md-2"
              title=""
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="Admin"
            >
              <i className="fas fa-user-cog"></i>
            </button>
          </div>
        </div>
      </div>
      {/* Vertical sidebar that changes to navbar on mobile using only bootstrap classes */}
    </>
  );
};

export default SidebarModules;
