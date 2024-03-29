import GeoTIFF from 'ol/source/GeoTIFF.js';
import Map from 'ol/Map.js';
import TileLayer from 'ol/layer/WebGLTile.js';

// Function to fetch GeoTIFF data with proper CORS and authentication headers
async function fetchGeoTIFFData(url) {
  const headers = new Headers();
  // Add authentication headers if required
  headers.append('Authorization', 'Basic ' + btoa('admin:geoserver')); // Replace username and password with actual credentials
  
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: headers
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.arrayBuffer();
  } catch (error) {
    console.error('Error fetching GeoTIFF data:', error);
    throw error;
  }
}

// Fetch GeoTIFF data using the function
const url = 'http://localhost:8080/geoserver/Tiff_Layers/wms/119_images_A_VEHS_C2FPA019724SS013882_0601_019724_03082021DIP_001_DQ_ort_roi_store';
// const geoTIFFData = await fetchGeoTIFFData(url);

// Create GeoTIFF source using the fetched data
const source = new GeoTIFF({
  sources: [
    {
      // url: geoTIFFData,
      url: 'https://openlayers.org/data/raster/no-overviews.tif',
      // Add overviews if necessary
      // overviews: ['https://openlayers.org/data/raster/no-overviews.tif.ovr'],
    },
  ],
});

// Create OpenLayers map
const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: source,
    }),
  ],
  view: source.getView(),
});
