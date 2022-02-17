window.exclude = [];
  window.watch = false;
  window.environment = 'release';
  window.localMode = 'build';
  
  window.appConfig = {
    showDebugger: false,
    projectGraphs: [
      {
        id: 'local',
        label: 'local',
        url: 'projectGraph.json',
      }
    ],
    defaultProjectGraph: 'local',
  };
  window.projectGraphResponse = {"hash":"9e13ea31dea60ca8ad61baef5247e67eafbb20db76d73aaf845a40f1b0e1f03f","projects":[{"name":"nbkparks-bike-tour-e2e","type":"e2e","data":{"tags":[],"root":"apps/nbkparks-bike-tour-e2e","files":[]}},{"name":"nbkparks-bike-tour","type":"app","data":{"tags":[],"root":"apps/nbkparks-bike-tour","files":[]}},{"name":"biketour2019","type":"lib","data":{"tags":[],"root":"libs/biketour2019","files":[]}},{"name":"biketour2022","type":"lib","data":{"tags":[],"root":"libs/biketour2022","files":[]}}],"dependencies":{"nbkparks-bike-tour-e2e":[{"source":"nbkparks-bike-tour-e2e","target":"nbkparks-bike-tour","type":"implicit"}],"nbkparks-bike-tour":[{"source":"nbkparks-bike-tour","target":"biketour2019","type":"static"},{"source":"nbkparks-bike-tour","target":"biketour2022","type":"static"}],"biketour2019":[],"biketour2022":[]},"layout":{"appsDir":"apps","libsDir":"libs"},"affected":[],"focus":null,"groupByFolder":false,"exclude":[]};