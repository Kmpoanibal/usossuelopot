var wms_layers = [];

var format_Usos_suelo_urbano_POT_0 = new ol.format.GeoJSON();
var features_Usos_suelo_urbano_POT_0 = format_Usos_suelo_urbano_POT_0.readFeatures(json_Usos_suelo_urbano_POT_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Usos_suelo_urbano_POT_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Usos_suelo_urbano_POT_0.addFeatures(features_Usos_suelo_urbano_POT_0);
var lyr_Usos_suelo_urbano_POT_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Usos_suelo_urbano_POT_0, 
                style: style_Usos_suelo_urbano_POT_0,
                popuplayertitle: "Usos_suelo_urbano_POT",
                interactive: true,
    title: 'Usos_suelo_urbano_POT<br />\
    <img src="styles/legend/Usos_suelo_urbano_POT_0_0.png" /> Áreas de baja mixtura<br />\
    <img src="styles/legend/Usos_suelo_urbano_POT_0_1.png" /> Áreas y corredores de alta mixtura<br />\
    <img src="styles/legend/Usos_suelo_urbano_POT_0_2.png" /> Áreas y corredores de media mixtura<br />\
    <img src="styles/legend/Usos_suelo_urbano_POT_0_3.png" /> Espacio Público Existente<br />\
    <img src="styles/legend/Usos_suelo_urbano_POT_0_4.png" /> Espacio Público Proyectado<br />\
    <img src="styles/legend/Usos_suelo_urbano_POT_0_5.png" /> Uso Dotacional<br />\
    <img src="styles/legend/Usos_suelo_urbano_POT_0_6.png" /> <br />'
        });

lyr_Usos_suelo_urbano_POT_0.setVisible(true);
var layersList = [lyr_Usos_suelo_urbano_POT_0];
lyr_Usos_suelo_urbano_POT_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'cod_cat_us': 'cod_cat_us', 'cod_subcat': 'cod_subcat', 'areagralus': 'areagralus', 'subcategor': 'subcategor', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Usos_suelo_urbano_POT_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'cod_cat_us': 'TextEdit', 'cod_subcat': 'TextEdit', 'areagralus': 'TextEdit', 'subcategor': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Usos_suelo_urbano_POT_0.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'cod_cat_us': 'inline label - always visible', 'cod_subcat': 'inline label - always visible', 'areagralus': 'inline label - always visible', 'subcategor': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_Usos_suelo_urbano_POT_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});