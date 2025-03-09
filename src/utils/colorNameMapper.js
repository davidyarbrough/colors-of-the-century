/**
 * Utility to map hex color codes to descriptive color names using W3C standard CSS colors
 * 
 * This module provides functions to convert hex color codes to human-readable
 * color names, enhancing the educational value of the application.
 */
import nearestColor from 'nearest-color';

/**
 * W3C standard CSS named colors
 * Source: https://www.w3.org/TR/css-color-4/#named-colors
 */
// Map of color keys to their hex values and display names
const W3C_COLORS = {
  aliceblue: '#f0f8ff',
  antiquewhite: '#faebd7',
  aqua: '#00ffff',
  aquamarine: '#7fffd4',
  azure: '#f0ffff',
  beige: '#f5f5dc',
  bisque: '#ffe4c4',
  black: '#000000',
  blanchedalmond: '#ffebcd',
  blue: '#0000ff',
  blueviolet: '#8a2be2',
  brown: '#a52a2a',
  burlywood: '#deb887',
  cadetblue: '#5f9ea0',
  chartreuse: '#7fff00',
  chocolate: '#d2691e',
  coral: '#ff7f50',
  cornflowerblue: '#6495ed',
  cornsilk: '#fff8dc',
  crimson: '#dc143c',
  cyan: '#00ffff',
  darkblue: '#00008b',
  darkcyan: '#008b8b',
  darkgoldenrod: '#b8860b',
  darkgray: '#a9a9a9',
  darkgreen: '#006400',
  darkgrey: '#a9a9a9',
  darkkhaki: '#bdb76b',
  darkmagenta: '#8b008b',
  darkolivegreen: '#556b2f',
  darkorange: '#ff8c00',
  darkorchid: '#9932cc',
  darkred: '#8b0000',
  darksalmon: '#e9967a',
  darkseagreen: '#8fbc8f',
  darkslateblue: '#483d8b',
  darkslategray: '#2f4f4f',
  darkslategrey: '#2f4f4f',
  darkturquoise: '#00ced1',
  darkviolet: '#9400d3',
  deeppink: '#ff1493',
  deepskyblue: '#00bfff',
  dimgray: '#696969',
  dimgrey: '#696969',
  dodgerblue: '#1e90ff',
  firebrick: '#b22222',
  floralwhite: '#fffaf0',
  forestgreen: '#228b22',
  fuchsia: '#ff00ff',
  gainsboro: '#dcdcdc',
  ghostwhite: '#f8f8ff',
  gold: '#ffd700',
  goldenrod: '#daa520',
  gray: '#808080',
  green: '#008000',
  greenyellow: '#adff2f',
  grey: '#808080',
  honeydew: '#f0fff0',
  hotpink: '#ff69b4',
  indianred: '#cd5c5c',
  indigo: '#4b0082',
  ivory: '#fffff0',
  khaki: '#f0e68c',
  lavender: '#e6e6fa',
  lavenderblush: '#fff0f5',
  lawngreen: '#7cfc00',
  lemonchiffon: '#fffacd',
  lightblue: '#add8e6',
  lightcoral: '#f08080',
  lightcyan: '#e0ffff',
  lightgoldenrodyellow: '#fafad2',
  lightgray: '#d3d3d3',
  lightgreen: '#90ee90',
  lightgrey: '#d3d3d3',
  lightpink: '#ffb6c1',
  lightsalmon: '#ffa07a',
  lightseagreen: '#20b2aa',
  lightskyblue: '#87cefa',
  lightslategray: '#778899',
  lightslategrey: '#778899',
  lightsteelblue: '#b0c4de',
  lightyellow: '#ffffe0',
  lime: '#00ff00',
  limegreen: '#32cd32',
  linen: '#faf0e6',
  magenta: '#ff00ff',
  maroon: '#800000',
  mediumaquamarine: '#66cdaa',
  mediumblue: '#0000cd',
  mediumorchid: '#ba55d3',
  mediumpurple: '#9370db',
  mediumseagreen: '#3cb371',
  mediumslateblue: '#7b68ee',
  mediumspringgreen: '#00fa9a',
  mediumturquoise: '#48d1cc',
  mediumvioletred: '#c71585',
  midnightblue: '#191970',
  mintcream: '#f5fffa',
  mistyrose: '#ffe4e1',
  moccasin: '#ffe4b5',
  navajowhite: '#ffdead',
  navy: '#000080',
  oldlace: '#fdf5e6',
  olive: '#808000',
  olivedrab: '#6b8e23',
  orange: '#ffa500',
  orangered: '#ff4500',
  orchid: '#da70d6',
  palegoldenrod: '#eee8aa',
  palegreen: '#98fb98',
  paleturquoise: '#afeeee',
  palevioletred: '#db7093',
  papayawhip: '#ffefd5',
  peachpuff: '#ffdab9',
  peru: '#cd853f',
  pink: '#ffc0cb',
  plum: '#dda0dd',
  powderblue: '#b0e0e6',
  purple: '#800080',
  rebeccapurple: '#663399',
  red: '#ff0000',
  rosybrown: '#bc8f8f',
  royalblue: '#4169e1',
  saddlebrown: '#8b4513',
  salmon: '#fa8072',
  sandybrown: '#f4a460',
  seagreen: '#2e8b57',
  seashell: '#fff5ee',
  sienna: '#a0522d',
  silver: '#c0c0c0',
  skyblue: '#87ceeb',
  slateblue: '#6a5acd',
  slategray: '#708090',
  slategrey: '#708090',
  snow: '#fffafa',
  springgreen: '#00ff7f',
  steelblue: '#4682b4',
  tan: '#d2b48c',
  teal: '#008080',
  thistle: '#d8bfd8',
  tomato: '#ff6347',
  turquoise: '#40e0d0',
  violet: '#ee82ee',
  wheat: '#f5deb3',
  white: '#ffffff',
  whitesmoke: '#f5f5f5',
  yellow: '#ffff00',
  yellowgreen: '#9acd32',

  smoke: '#101010',
  cranberry: '#400505',
  cobalt: '#050550',
  fern: '#054005',

  //Bicolor decade colors
  feb105dmy: '#1feb05',
  feb205dmy: '#2feb05',
  feb305dmy: '#3feb05',
  feb405dmy: '#4feb05',
  feb505dmy: '#5feb05',
  feb605dmy: '#6feb05',
  feb705dmy: '#7feb05',
  feb805dmy: '#8feb05',
  feb905dmy: '#9feb05',
  dec105dmy: '#1dec05',
  dec205dmy: '#2dec05',
  dec305dmy: '#3dec05',
  dec405dmy: '#4dec05',
  dec505dmy: '#5dec05',
  dec605dmy: '#6dec05',
  dec705dmy: '#7dec05',
  dec805dmy: '#8dec05',
  dec905dmy: '#9dec05',
  feb505ymd: '#05feb5',
  feb505mdy: '#feb505',
  dec505ymd: '#05dec5',
  dec505mdy: '#dec505',

  feb115dmy: '#1feb15',
  feb215dmy: '#2feb15',
  feb315dmy: '#3feb15',
  feb415dmy: '#4feb15',
  feb515dmy: '#5feb15',
  feb615dmy: '#6feb15',
  feb715dmy: '#7feb15',
  feb815dmy: '#8feb15',
  feb915dmy: '#9feb15',
  dec115dmy: '#1dec15',
  dec215dmy: '#2dec15',
  dec315dmy: '#3dec15',
  dec415dmy: '#4dec15',
  dec515dmy: '#5dec15',
  dec615dmy: '#6dec15',
  dec715dmy: '#7dec15',
  dec815dmy: '#8dec15',
  dec915dmy: '#9dec15',
  feb515ymd: '#15feb5',
  feb515mdy: '#feb515',
  dec515ymd: '#15dec5',
  dec515mdy: '#dec515',

  feb125dmy: '#1feb25',
  feb225dmy: '#2feb25',
  feb325dmy: '#3feb25',
  feb425dmy: '#4feb25',
  feb525dmy: '#5feb25',
  feb625dmy: '#6feb25',
  feb725dmy: '#7feb25',
  feb825dmy: '#8feb25',
  feb925dmy: '#9feb25',
  dec125dmy: '#1dec25',
  dec225dmy: '#2dec25',
  dec325dmy: '#3dec25',
  dec425dmy: '#4dec25',
  dec525dmy: '#5dec25',
  dec625dmy: '#6dec25',
  dec725dmy: '#7dec25',
  dec825dmy: '#8dec25',
  dec925dmy: '#9dec25',
  feb525ymd: '#25feb5',
  feb525mdy: '#feb525',
  dec525ymd: '#25dec5',
  dec525mdy: '#dec525',


  feb135dmy: '#1feb35',
  feb235dmy: '#2feb35',
  feb335dmy: '#3feb35',
  feb435dmy: '#4feb35',
  feb535dmy: '#5feb35',
  feb635dmy: '#6feb35',
  feb735dmy: '#7feb35',
  feb835dmy: '#8feb35',
  feb935dmy: '#9feb35',
  dec135dmy: '#1dec35',
  dec235dmy: '#2dec35',
  dec335dmy: '#3dec35',
  dec435dmy: '#4dec35',
  dec535dmy: '#5dec35',
  dec635dmy: '#6dec35',
  dec735dmy: '#7dec35',
  dec835dmy: '#8dec35',
  dec935dmy: '#9dec35',
  feb535ymd: '#35feb5',
  feb535mdy: '#feb535',
  dec535ymd: '#35dec5',
  dec535mdy: '#dec535',

  feb145dmy: '#1feb45',
  feb245dmy: '#2feb45',
  feb345dmy: '#3feb45',
  feb445dmy: '#4feb45',
  feb545dmy: '#5feb45',
  feb645dmy: '#6feb45',
  feb745dmy: '#7feb45',
  feb845dmy: '#8feb45',
  feb945dmy: '#9feb45',
  dec145dmy: '#1dec45',
  dec245dmy: '#2dec45',
  dec345dmy: '#3dec45',
  dec445dmy: '#4dec45',
  dec545dmy: '#5dec45',
  dec645dmy: '#6dec45',
  dec745dmy: '#7dec45',
  dec845dmy: '#8dec45',
  dec945dmy: '#9dec45',
  feb545ymd: '#45feb5',
  feb545mdy: '#feb545',
  dec545ymd: '#45dec5',
  dec545mdy: '#dec545',

  feb155dmy: '#1feb55',
  feb255dmy: '#2feb55',
  feb355dmy: '#3feb55',
  feb455dmy: '#4feb55',
  feb555dmy: '#5feb55',
  feb655dmy: '#6feb55',
  feb755dmy: '#7feb55',
  feb855dmy: '#8feb55',
  feb955dmy: '#9feb55',
  dec155dmy: '#1dec55',
  dec255dmy: '#2dec55',
  dec355dmy: '#3dec55',
  dec455dmy: '#4dec55',
  dec555dmy: '#5dec55',
  dec655dmy: '#6dec55',
  dec755dmy: '#7dec55',
  dec855dmy: '#8dec55',
  dec955dmy: '#9dec55',
  feb555ymd: '#55feb5',
  feb555mdy: '#feb555',
  dec555ymd: '#55dec5',
  dec555mdy: '#dec555',

  feb165dmy: '#1feb65',
  feb265dmy: '#2feb65',
  feb365dmy: '#3feb65',
  feb465dmy: '#4feb65',
  feb565dmy: '#5feb65',
  feb665dmy: '#6feb65',
  feb765dmy: '#7feb65',
  feb865dmy: '#8feb65',
  feb965dmy: '#9feb65',
  dec165dmy: '#1dec65',
  dec265dmy: '#2dec65',
  dec365dmy: '#3dec65',
  dec465dmy: '#4dec65',
  dec565dmy: '#5dec65',
  dec665dmy: '#6dec65',
  dec765dmy: '#7dec65',
  dec865dmy: '#8dec65',
  dec965dmy: '#9dec65',
  feb565ymd: '#65feb5',
  feb565mdy: '#feb565',
  dec565ymd: '#65dec5',
  dec565mdy: '#dec565',

  feb175dmy: '#1feb75',
  feb275dmy: '#2feb75',
  feb375dmy: '#3feb75',
  feb475dmy: '#4feb75',
  feb575dmy: '#5feb75',
  feb675dmy: '#6feb75',
  feb775dmy: '#7feb75',
  feb875dmy: '#8feb75',
  feb975dmy: '#9feb75',
  dec175dmy: '#1dec75',
  dec275dmy: '#2dec75',
  dec375dmy: '#3dec75',
  dec475dmy: '#4dec75',
  dec575dmy: '#5dec75',
  dec675dmy: '#6dec75',
  dec775dmy: '#7dec75',
  dec875dmy: '#8dec75',
  dec975dmy: '#9dec75',
  feb775ymd: '#75feb7',
  feb775mdy: '#feb775',
  dec775ymd: '#75dec7',
  dec775mdy: '#dec775',

  feb185dmy: '#1feb85',
  feb285dmy: '#2feb85',
  feb385dmy: '#3feb85',
  feb485dmy: '#4feb85',
  feb585dmy: '#5feb85',
  feb685dmy: '#6feb85',
  feb785dmy: '#7feb85',
  feb885dmy: '#8feb85',
  feb985dmy: '#9feb85',
  dec185dmy: '#1dec85',
  dec285dmy: '#2dec85',
  dec385dmy: '#3dec85',
  dec485dmy: '#4dec85',
  dec585dmy: '#5dec85',
  dec685dmy: '#6dec85',
  dec785dmy: '#7dec85',
  dec885dmy: '#8dec85',
  dec985dmy: '#9dec85',
  feb585ymd: '#85feb5',
  feb585mdy: '#feb585',
  dec585ymd: '#85dec5',
  dec585mdy: '#dec585',

  feb195dmy: '#1feb95',
  feb295dmy: '#2feb95',
  feb395dmy: '#3feb95',
  feb495dmy: '#4feb95',
  feb595dmy: '#5feb95',
  feb695dmy: '#6feb95',
  feb795dmy: '#7feb95',
  feb895dmy: '#8feb95',
  feb995dmy: '#9feb95',
  dec195dmy: '#1dec95',
  dec295dmy: '#2dec95',
  dec395dmy: '#3dec95',
  dec495dmy: '#4dec95',
  dec595dmy: '#5dec95',
  dec695dmy: '#6dec95',
  dec795dmy: '#7dec95',
  dec895dmy: '#8dec95',
  dec995dmy: '#9dec95',
  feb595ymd: '#95feb5',
  feb595mdy: '#feb595',
  dec595ymd: '#95dec5',
  dec595mdy: '#dec595',

};

// Initialize the nearest-color finder with the W3C colors
const getNearest = nearestColor.from(W3C_COLORS);

/**
 * Map of color keys to their properly formatted display names
 */
const COLOR_DISPLAY_NAMES = {
  aliceblue: 'Alice Blue',
  antiquewhite: 'Antique White',
  aqua: 'Aqua',
  aquamarine: 'Aquamarine',
  azure: 'Azure',
  beige: 'Beige',
  bisque: 'Bisque',
  black: 'Black',
  blanchedalmond: 'Blanched Almond',
  blue: 'Blue',
  blueviolet: 'Blue Violet',
  brown: 'Brown',
  burlywood: 'Burlywood',
  cadetblue: 'Cadet Blue',
  chartreuse: 'Chartreuse',
  chocolate: 'Chocolate',
  coral: 'Coral',
  cornflowerblue: 'Cornflower Blue',
  cornsilk: 'Cornsilk',
  crimson: 'Crimson',
  cyan: 'Cyan',
  darkblue: 'Dark Blue',
  darkcyan: 'Dark Cyan',
  darkgoldenrod: 'Dark Goldenrod',
  darkgray: 'Dark Gray',
  darkgreen: 'Dark Green',
  darkgrey: 'Dark Grey',
  darkkhaki: 'Dark Khaki',
  darkmagenta: 'Dark Magenta',
  darkolivegreen: 'Dark Olive Green',
  darkorange: 'Dark Orange',
  darkorchid: 'Dark Orchid',
  darkred: 'Dark Red',
  darksalmon: 'Dark Salmon',
  darkseagreen: 'Dark Sea Green',
  darkslateblue: 'Dark Slate Blue',
  darkslategray: 'Dark Slate Gray',
  darkslategrey: 'Dark Slate Grey',
  darkturquoise: 'Dark Turquoise',
  darkviolet: 'Dark Violet',
  deeppink: 'Deep Pink',
  deepskyblue: 'Deep Sky Blue',
  dimgray: 'Dim Gray',
  dimgrey: 'Dim Grey',
  dodgerblue: 'Dodger Blue',
  firebrick: 'Firebrick',
  floralwhite: 'Floral White',
  forestgreen: 'Forest Green',
  fuchsia: 'Fuchsia',
  gainsboro: 'Gainsboro',
  ghostwhite: 'Ghost White',
  gold: 'Gold',
  goldenrod: 'Goldenrod',
  gray: 'Gray',
  green: 'Green',
  greenyellow: 'Green Yellow',
  grey: 'Grey',
  honeydew: 'Honeydew',
  hotpink: 'Hot Pink',
  indianred: 'Indian Red',
  indigo: 'Indigo',
  ivory: 'Ivory',
  khaki: 'Khaki',
  lavender: 'Lavender',
  lavenderblush: 'Lavender Blush',
  lawngreen: 'Lawn Green',
  lemonchiffon: 'Lemon Chiffon',
  lightblue: 'Light Blue',
  lightcoral: 'Light Coral',
  lightcyan: 'Light Cyan',
  lightgoldenrodyellow: 'Light Goldenrod Yellow',
  lightgray: 'Light Gray',
  lightgreen: 'Light Green',
  lightgrey: 'Light Grey',
  lightpink: 'Light Pink',
  lightsalmon: 'Light Salmon',
  lightseagreen: 'Light Sea Green',
  lightskyblue: 'Light Sky Blue',
  lightslategray: 'Light Slate Gray',
  lightslategrey: 'Light Slate Grey',
  lightsteelblue: 'Light Steel Blue',
  lightyellow: 'Light Yellow',
  lime: 'Lime',
  limegreen: 'Lime Green',
  linen: 'Linen',
  magenta: 'Magenta',
  maroon: 'Maroon',
  mediumaquamarine: 'Medium Aquamarine',
  mediumblue: 'Medium Blue',
  mediumorchid: 'Medium Orchid',
  mediumpurple: 'Medium Purple',
  mediumseagreen: 'Medium Sea Green',
  mediumslateblue: 'Medium Slate Blue',
  mediumspringgreen: 'Medium Spring Green',
  mediumturquoise: 'Medium Turquoise',
  mediumvioletred: 'Medium Violet Red',
  midnightblue: 'Midnight Blue',
  mintcream: 'Mint Cream',
  mistyrose: 'Misty Rose',
  moccasin: 'Moccasin',
  navajowhite: 'Navajo White',
  navy: 'Navy',
  oldlace: 'Old Lace',
  olive: 'Olive',
  olivedrab: 'Olive Drab',
  orange: 'Orange',
  orangered: 'Orange Red',
  orchid: 'Orchid',
  palegoldenrod: 'Pale Goldenrod',
  palegreen: 'Pale Green',
  paleturquoise: 'Pale Turquoise',
  palevioletred: 'Pale Violet Red',
  papayawhip: 'Papaya Whip',
  peachpuff: 'Peach Puff',
  peru: 'Peru',
  pink: 'Pink',
  plum: 'Plum',
  powderblue: 'Powder Blue',
  purple: 'Purple',
  rebeccapurple: 'Rebecca Purple',
  red: 'Red',
  rosybrown: 'Rosy Brown',
  royalblue: 'Royal Blue',
  saddlebrown: 'Saddle Brown',
  salmon: 'Salmon',
  sandybrown: 'Sandy Brown',
  seagreen: 'Sea Green',
  seashell: 'Seashell',
  sienna: 'Sienna',
  silver: 'Silver',
  skyblue: 'Sky Blue',
  slateblue: 'Slate Blue',
  slategray: 'Slate Gray',
  slategrey: 'Slate Grey',
  snow: 'Snow',
  springgreen: 'Spring Green',
  steelblue: 'Steel Blue',
  tan: 'Tan',
  teal: 'Teal',
  thistle: 'Thistle',
  tomato: 'Tomato',
  turquoise: 'Turquoise',
  violet: 'Violet',
  wheat: 'Wheat',
  white: 'White',
  whitesmoke: 'White Smoke',
  yellow: 'Yellow',
  yellowgreen: 'Yellow Green',

  //Bicolor named Colors
  feb105dmy: 'Greensward',
  feb205dmy: 'Greensward',
  feb305dmy: 'Greensward',
  feb405dmy: 'Greensward',
  feb505dmy: 'Greensward',
  feb605dmy: 'Greensward',
  feb705dmy: 'Greensward',
  feb805dmy: 'Greensward',
  feb905dmy: 'Greensward',
  dec105dmy: 'Margarita',
  dec205dmy: 'Margarita',
  dec305dmy: 'Margarita',
  dec405dmy: 'Margarita',
  dec505dmy: 'Margarita',
  dec605dmy: 'Margarita',
  dec705dmy: 'Margarita',
  dec805dmy: 'Margarita',
  dec905dmy: 'Margarita',
  feb505ymd: 'Caribbean',
  feb505mdy: 'Sunrise',
  dec505ymd: 'Lagoon',
  dec505mdy: 'Sunflower',
};

/**
 * Get the name of a color based on its hex code using W3C standard CSS colors
 * @param {string} hexCode - The hex color code to name
 * @returns {string} The nearest W3C standard color name, properly formatted
 */
const getColorName = (hexCode) => {
  try {
    // Make sure the hex code has a # prefix
    if (!hexCode.startsWith('#')) {
      hexCode = '#' + hexCode;
    }
    
    // Find the nearest W3C color
    const nearest = getNearest(hexCode);
    
    // Return the properly formatted display name from our mapping
    return COLOR_DISPLAY_NAMES[nearest.name] || nearest.name;
  } catch (error) {
    console.error('Error finding color name:', error);
    return 'Unknown';
  }
};

export default getColorName;
