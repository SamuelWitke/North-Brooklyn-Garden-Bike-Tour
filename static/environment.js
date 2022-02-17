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
  window.projectGraphResponse = {"hash":"67590a70910f156899eccfaed374bb684af70f8c7b58ea8f6480da2cc3ba34a9","projects":[{"name":"scholes-st-childrens-garden","type":"lib","data":{"tags":[],"root":"libs/scholes-st-childrens-garden","files":[]}},{"name":"sunshine-community-garden","type":"lib","data":{"tags":[],"root":"libs/sunshine-community-garden","files":[]}},{"name":"nbkparks-bike-tour-e2e","type":"e2e","data":{"tags":[],"root":"apps/nbkparks-bike-tour-e2e","files":[]}},{"name":"berry-street-garden","type":"lib","data":{"tags":[],"root":"libs/berry-street-garden","files":[]}},{"name":"nbkparks-bike-tour","type":"app","data":{"tags":[],"root":"apps/nbkparks-bike-tour","files":[]}},{"name":"red-shed-garden","type":"lib","data":{"tags":[],"root":"libs/red-shed-garden","files":[]}},{"name":"java-st-garden","type":"lib","data":{"tags":[],"root":"libs/java-st-garden","files":[]}},{"name":"lentol-garden","type":"lib","data":{"tags":[],"root":"libs/lentol-garden","files":[]}},{"name":"biketour2019","type":"lib","data":{"tags":[],"root":"libs/biketour2019","files":[]}},{"name":"biketour2022","type":"lib","data":{"tags":[],"root":"libs/biketour2022","files":[]}},{"name":"keap-fourth","type":"lib","data":{"tags":[],"root":"libs/keap-fourth","files":[]}},{"name":"el-puente","type":"lib","data":{"tags":[],"root":"libs/el-puente","files":[]}}],"dependencies":{"scholes-st-childrens-garden":[],"sunshine-community-garden":[],"nbkparks-bike-tour-e2e":[{"source":"nbkparks-bike-tour-e2e","target":"nbkparks-bike-tour","type":"implicit"}],"berry-street-garden":[],"nbkparks-bike-tour":[{"source":"nbkparks-bike-tour","target":"biketour2019","type":"static"},{"source":"nbkparks-bike-tour","target":"biketour2022","type":"static"}],"red-shed-garden":[],"java-st-garden":[],"lentol-garden":[],"biketour2019":[{"source":"biketour2019","target":"lentol-garden","type":"static"},{"source":"biketour2019","target":"java-st-garden","type":"static"},{"source":"biketour2019","target":"red-shed-garden","type":"static"},{"source":"biketour2019","target":"scholes-st-childrens-garden","type":"static"},{"source":"biketour2019","target":"sunshine-community-garden","type":"static"},{"source":"biketour2019","target":"keap-fourth","type":"static"},{"source":"biketour2019","target":"el-puente","type":"static"},{"source":"biketour2019","target":"berry-street-garden","type":"static"}],"biketour2022":[],"keap-fourth":[],"el-puente":[]},"layout":{"appsDir":"apps","libsDir":"libs"},"affected":[],"focus":null,"groupByFolder":false,"exclude":[]};