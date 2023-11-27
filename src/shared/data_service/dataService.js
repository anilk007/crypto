async function fetchData() {
    try {
      const data = await import('../../components/bar_chart/bar.data.json');
      const config = await import('../../components/bar_chart/bar.config.json');

      console.log(data);
  
      return { data: data.default, config: config.default };
    } catch (error) {
      console.error("Error importing data or config:", error);
      return { data: [], config: {} };
    }
  }
  
  export { fetchData };
  