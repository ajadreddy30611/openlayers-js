import ImageWMS from 'ol/source/ImageWMS.js';
import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import View from 'ol/View.js';
import {Image as ImageLayer, Tile as TileLayer} from 'ol/layer.js';
import {useGeographic} from 'ol/proj.js';

useGeographic();
const layers = [
  new TileLayer({
    source: new OSM(),
  }),
  new ImageLayer({
    extent: [79.8464062869999935,37.0293226134035152, 79.8809415705140253,37.0477340179999999],
    source: new ImageWMS({
      url: 'http://localhost:8080/geoserver/Tiff_Layers/wms',
      params: {'LAYERS': 'Tiff_Layers:Images_airport'},
      ratio: 1,
      serverType: 'geoserver',
    }),
  }),
];
const map = new Map({
  layers: layers,
  target: 'map',
  view: new View({
    center: [79.86367392875701,37.038528315701754],
    // center: ol.proj.transform([37.038528315701754, 79.86367392875701],'EPSG:4326', 'EPSG:3857'),
    zoom: 14,
  }),
});
