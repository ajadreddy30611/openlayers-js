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
    // extent: [79.8464062869999935,37.0293226134035152, 79.8809415705140253,37.0477340179999999],
    // extent: [75.9499511718750000,39.3994903564453125, 76.0741729736328125,39.6550903320312500], //c2fpa
    // extent: [75.9393920898437500,39.3116226196289063 , 76.0774765014648438,39.5731887817382813],
    // extent: [66.9111557006835938,24.5514183044433594 , 67.0278854370117188,24.8349971771240234], //cmx
    // extent: [343752.6600909694680013,4292534.7131393468007445 , 350217.0600909694330767,4297279.5131393475458026], //lushan carto
    source: new ImageWMS({
      url: 'http://localhost:8080/geoserver/Tiff_Layers/wms',
      params: {'LAYERS': 'Tiff_Layers:119_images_BAND_235225011'},
      // params: {'LAYERS': 'Tiff_Layers:119_images_C2DPA019587SS012604_0801_019594_28082020DIP_002_DQ_ort'},
      // params: {'LAYERS': 'Tiff_Layers:119_images_C2FPA017037SS011540_1101_017045_07022021DIP_002_DQ_ort'},
      // params: {'LAYERS': 'Tiff_Layers:119_images_C2CMX029122PS021384_0301_029122_22092021DIP_002_DQ_ort','TILED':true},
      // params: {'LAYERS': 'Tiff_Layers:Images_airport'},
      // params: {'LAYERS': 'Tiff_Layers:Images_Lushun_Carto_2E_Pan'},
      // params: {'LAYERS': 'Tiff_Layers:Images_Karachi'},
      ratio: 1,
      serverType: 'geoserver',
    }),
  }),
];
const map = new Map({
  layers: layers,
  target: 'map',
  view: new View({
    // center: [66.9111557006835938,24.8349971771240234], //cmx
    // center: [75.9499511718750000,39.6550903320312500], //c2fpa
    // center: [121.23816787618196,38.78963376996377], //lushan carto
    // center: [75.9393920898437500,39.5731887817382813], //c2d
    center: [66.9843117776491,24.830248945058084],
    // center: [79.86367392875701,37.038528315701754], //airport
    // center: [ 66.97512193333792,24.834380563866354], //Karachi
    zoom: 15,
  }),
});
