import ImageWMS from 'ol/source/ImageWMS.js';
import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import View from 'ol/View.js';
import {Image as ImageLayer, Tile as TileLayer} from 'ol/layer.js';

const layers = [
  new TileLayer({
    source: new OSM(),
  }),
  new ImageLayer({
    // extent: [-13884991, 2870341, -7455066, 6338219],
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
    center: [-10997148, 4569099],
    zoom: 4,
  }),
});
