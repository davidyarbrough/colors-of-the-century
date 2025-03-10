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
const COLOR_MAP = {

  // Year colors for each format
  // For YMD format (YYMMDD), the year is in the first position (red component)
  ymd_year_00s: '#050a0a',      // Year 00-09, nearly black
  ymd_year_10s: '#0f0a0a',      // Year 10-19, very dark red
  ymd_year_20s: '#190a0a',      // Year 20-29, dark burgundy
  ymd_year_30s: '#230a0a',      // Year 30-39, deep ruby
  ymd_year_40s: '#2d0a0a',      // Year 40-49, maroon
  ymd_year_50s: '#370a0a',      // Year 50-59, brick red
  ymd_year_60s: '#410a0a',      // Year 60-69, rust
  ymd_year_70s: '#4b0a0a',      // Year 70-79, terra cotta
  ymd_year_80s: '#550a0a',      // Year 80-89, copper
  ymd_year_90s: '#5f0a0a',      // Year 90-99, mahogany
  
  // For DMY/MDY formats, the year is in the last position (blue component)
  dm_year_00s: '#0a0a05',      // Year 00-09, very dark blue-green
  dm_year_10s: '#0a0a0f',      // Year 10-19, midnight blue
  dm_year_20s: '#0a0a19',      // Year 20-29, navy blue
  dm_year_30s: '#0a0a23',      // Year 30-39, royal blue
  dm_year_40s: '#0a0a2d',      // Year 40-49, cobalt blue
  dm_year_50s: '#0a0a37',      // Year 50-59, sapphire blue
  dm_year_60s: '#0a0a41',      // Year 60-69, azure blue
  dm_year_70s: '#0a0a4b',      // Year 70-79, cerulean blue
  dm_year_80s: '#0a0a55',      // Year 80-89, ultramarine blue
  dm_year_90s: '#0a0a5f',      // Year 90-99, electric blue
  
  // Day component colors (values 01-31) - used in first position for DMY, second for MDY
  day_01_07: '#010a0a',        // Day 01-07, nearly black
  day_08_14: '#080a0a',        // Day 08-14, dark charcoal
  day_15_21: '#0f0a0a',        // Day 15-21, deep brown
  day_22_28: '#160a0a',        // Day 22-28, mahogany
  day_29_31: '#1d0a0a',        // Day 29-31, dark maroon
  
  // Month component colors (values 01-12) - used in second position for DMY, first for MDY
  month_01_03: '#0a010a',      // Month 01-03 (Jan-Mar), winter
  month_04_06: '#0a040a',      // Month 04-06 (Apr-Jun), spring
  month_07_09: '#0a070a',      // Month 07-09 (Jul-Sep), summer
  month_10_12: '#0a0a0a',      // Month 10-12 (Oct-Dec), fall

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
const getNearest = nearestColor.from(COLOR_MAP);

/**
 * Map of color keys to their properly formatted display names
 */
const COLOR_DISPLAY_NAMES = {

  // YMD format year colors (R value)  
  ymd_year_00s: 'Slate',               // Year 00-09
  ymd_year_10s: 'Burgundy',            // Year 10-19
  ymd_year_20s: 'Ruby',                // Year 20-29
  ymd_year_30s: 'Crimson',             // Year 30-39
  ymd_year_40s: 'Maroon',              // Year 40-49
  ymd_year_50s: 'Brick',               // Year 50-59
  ymd_year_60s: 'Rust',                // Year 60-69
  ymd_year_70s: 'Terra Cotta',         // Year 70-79
  ymd_year_80s: 'Copper',              // Year 80-89
  ymd_year_90s: 'Mahogany',            // Year 90-99
  
  // DMY/MDY format year colors (B value)
  dm_year_00s: 'Midnight',             // Year 00-09
  dm_year_10s: 'Navy',                 // Year 10-19
  dm_year_20s: 'Royal',                // Year 20-29
  dm_year_30s: 'Marine',               // Year 30-39
  dm_year_40s: 'Cobalt',               // Year 40-49
  dm_year_50s: 'Sapphire',             // Year 50-59
  dm_year_60s: 'Azure',                // Year 60-69
  dm_year_70s: 'Cerulean',             // Year 70-79
  dm_year_80s: 'Ultramarine',          // Year 80-89
  dm_year_90s: 'Electric',             // Year 90-99
  
  // Day component values
  day_01_07: 'Shadow',                // Day 01-07
  day_08_14: 'Charcoal',              // Day 08-14
  day_15_21: 'Onyx',                  // Day 15-21
  day_22_28: 'Ebony',                 // Day 22-28
  day_29_31: 'Jet',                   // Day 29-31
  
  // Month component values
  month_01_03: 'Forest',              // Month 01-03 (Jan-Mar)
  month_04_06: 'Emerald',             // Month 04-06 (Apr-Jun)
  month_07_09: 'Jade',                // Month 07-09 (Jul-Sep)
  month_10_12: 'Pine',                // Month 10-12 (Oct-Dec)

  // 2000s - Digital Renaissance theme
  feb105dmy: 'Pixel Leaf',
  feb205dmy: 'Pixel Leaf',
  feb305dmy: 'Pixel Leaf',
  feb405dmy: 'Pixel Leaf',
  feb505dmy: 'Pixel Leaf',
  feb605dmy: 'Pixel Leaf',
  feb705dmy: 'Pixel Leaf',
  feb805dmy: 'Pixel Leaf',
  feb905dmy: 'Pixel Leaf',
  dec105dmy: 'Digital Lime',
  dec205dmy: 'Digital Lime',
  dec305dmy: 'Digital Lime',
  dec405dmy: 'Digital Lime',
  dec505dmy: 'Digital Lime',
  dec605dmy: 'Digital Lime',
  dec705dmy: 'Digital Lime',
  dec805dmy: 'Digital Lime',
  dec905dmy: 'Digital Lime',
  feb505ymd: 'Cyber Aqua',
  feb505mdy: 'Renaissance Gold',
  dec505ymd: 'Matrix Teal',
  dec505mdy: 'Illuminated Amber',
  
  // 2010s - New Exploration theme
  feb115dmy: 'Expedition Green',
  feb215dmy: 'Expedition Green',
  feb315dmy: 'Expedition Green',
  feb415dmy: 'Expedition Green',
  feb515dmy: 'Expedition Green',
  feb615dmy: 'Expedition Green',
  feb715dmy: 'Expedition Green',
  feb815dmy: 'Expedition Green',
  feb915dmy: 'Expedition Green',
  dec115dmy: 'Rainforest Lime',
  dec215dmy: 'Rainforest Lime',
  dec315dmy: 'Rainforest Lime',
  dec415dmy: 'Rainforest Lime',
  dec515dmy: 'Rainforest Lime',
  dec615dmy: 'Rainforest Lime',
  dec715dmy: 'Rainforest Lime',
  dec815dmy: 'Rainforest Lime',
  dec915dmy: 'Rainforest Lime',
  feb515ymd: 'Deep Ocean',
  feb515mdy: 'Desert Gold',
  dec515ymd: 'Arctic Teal',
  dec515mdy: 'Sunset Amber',
  
  // 2020s - Global Connection theme
  feb125dmy: 'United Green',
  feb225dmy: 'United Green',
  feb325dmy: 'United Green',
  feb425dmy: 'United Green',
  feb525dmy: 'United Green',
  feb625dmy: 'United Green',
  feb725dmy: 'United Green',
  feb825dmy: 'United Green',
  feb925dmy: 'United Green',
  dec125dmy: 'Global Lime',
  dec225dmy: 'Global Lime',
  dec325dmy: 'Global Lime',
  dec425dmy: 'Global Lime',
  dec525dmy: 'Global Lime',
  dec625dmy: 'Global Lime',
  dec725dmy: 'Global Lime',
  dec825dmy: 'Global Lime',
  dec925dmy: 'Global Lime',
  feb525ymd: 'Harmony Blue',
  feb525mdy: 'Cultural Gold',
  dec525ymd: 'Peaceful Aqua',
  dec525mdy: 'Unity Amber',
  
  // 2030s - Sustainable Revolution theme
  feb135dmy: 'Renewable Green',
  feb235dmy: 'Renewable Green',
  feb335dmy: 'Renewable Green',
  feb435dmy: 'Renewable Green',
  feb535dmy: 'Renewable Green',
  feb635dmy: 'Renewable Green',
  feb735dmy: 'Renewable Green',
  feb835dmy: 'Renewable Green',
  feb935dmy: 'Renewable Green',
  dec135dmy: 'Eco Lime',
  dec235dmy: 'Eco Lime',
  dec335dmy: 'Eco Lime',
  dec435dmy: 'Eco Lime',
  dec535dmy: 'Eco Lime',
  dec635dmy: 'Eco Lime',
  dec735dmy: 'Eco Lime',
  dec835dmy: 'Eco Lime',
  dec935dmy: 'Eco Lime',
  feb535ymd: 'Clean Energy Blue',
  feb535mdy: 'Solar Gold',
  dec535ymd: 'Recycled Aqua',
  dec535mdy: 'Biomass Amber',
  
  // 2040s - Quantum Era theme
  feb145dmy: 'Quantum Green',
  feb245dmy: 'Quantum Green',
  feb345dmy: 'Quantum Green',
  feb445dmy: 'Quantum Green',
  feb545dmy: 'Quantum Green',
  feb645dmy: 'Quantum Green',
  feb745dmy: 'Quantum Green',
  feb845dmy: 'Quantum Green',
  feb945dmy: 'Quantum Green',
  dec145dmy: 'Particle Lime',
  dec245dmy: 'Particle Lime',
  dec345dmy: 'Particle Lime',
  dec445dmy: 'Particle Lime',
  dec545dmy: 'Particle Lime',
  dec645dmy: 'Particle Lime',
  dec745dmy: 'Particle Lime',
  dec845dmy: 'Particle Lime',
  dec945dmy: 'Particle Lime',
  feb545ymd: 'Waveform Aqua',
  feb545mdy: 'Fusion Gold',
  dec545ymd: 'Entangled Teal',
  dec545mdy: 'Atomic Amber',
  
  // 2050s - Interplanetary Pioneers theme
  feb155dmy: 'Martian Green',
  feb255dmy: 'Martian Green',
  feb355dmy: 'Martian Green',
  feb455dmy: 'Martian Green',
  feb555dmy: 'Martian Green',
  feb655dmy: 'Martian Green',
  feb755dmy: 'Martian Green',
  feb855dmy: 'Martian Green',
  feb955dmy: 'Martian Green',
  dec155dmy: 'Frontier Lime',
  dec255dmy: 'Frontier Lime',
  dec355dmy: 'Frontier Lime',
  dec455dmy: 'Frontier Lime',
  dec555dmy: 'Frontier Lime',
  dec655dmy: 'Frontier Lime',
  dec755dmy: 'Frontier Lime',
  dec855dmy: 'Frontier Lime',
  dec955dmy: 'Frontier Lime',
  feb555ymd: 'Europa Blue',
  feb555mdy: 'Titan Gold',
  dec555ymd: 'Asteroid Teal',
  dec555mdy: 'Launch Amber',
  
  // 2060s - Bioharmony Age theme
  feb165dmy: 'BioSynthetic Green',
  feb265dmy: 'BioSynthetic Green',
  feb365dmy: 'BioSynthetic Green',
  feb465dmy: 'BioSynthetic Green',
  feb565dmy: 'BioSynthetic Green',
  feb665dmy: 'BioSynthetic Green',
  feb765dmy: 'BioSynthetic Green',
  feb865dmy: 'BioSynthetic Green',
  feb965dmy: 'BioSynthetic Green',
  dec165dmy: 'Organic Lime',
  dec265dmy: 'Organic Lime',
  dec365dmy: 'Organic Lime',
  dec465dmy: 'Organic Lime',
  dec565dmy: 'Organic Lime',
  dec665dmy: 'Organic Lime',
  dec765dmy: 'Organic Lime',
  dec865dmy: 'Organic Lime',
  dec965dmy: 'Organic Lime',
  feb565ymd: 'Algae Aqua',
  feb565mdy: 'Pollen Gold',
  dec565ymd: 'Symbiotic Teal',
  dec565mdy: 'Harvest Amber',
  
  // 2070s - Neural Integration theme
  feb175dmy: 'Synapse Green',
  feb275dmy: 'Synapse Green',
  feb375dmy: 'Synapse Green',
  feb475dmy: 'Synapse Green',
  feb575dmy: 'Synapse Green',
  feb675dmy: 'Synapse Green',
  feb775dmy: 'Synapse Green',
  feb875dmy: 'Synapse Green',
  feb975dmy: 'Synapse Green',
  dec175dmy: 'Neural Lime',
  dec275dmy: 'Neural Lime',
  dec375dmy: 'Neural Lime',
  dec475dmy: 'Neural Lime',
  dec575dmy: 'Neural Lime',
  dec675dmy: 'Neural Lime',
  dec775dmy: 'Neural Lime',
  dec875dmy: 'Neural Lime',
  dec975dmy: 'Neural Lime',
  feb775ymd: 'Cerebral Aqua',
  feb775mdy: 'Cognition Gold',
  dec775ymd: 'Interface Teal',
  dec775mdy: 'Impulse Amber',
  
  // 2080s - Fusion Culture theme
  feb185dmy: 'Mixed Reality Green',
  feb285dmy: 'Mixed Reality Green',
  feb385dmy: 'Mixed Reality Green',
  feb485dmy: 'Mixed Reality Green',
  feb585dmy: 'Mixed Reality Green',
  feb685dmy: 'Mixed Reality Green',
  feb785dmy: 'Mixed Reality Green',
  feb885dmy: 'Mixed Reality Green',
  feb985dmy: 'Mixed Reality Green',
  dec185dmy: 'Blended Lime',
  dec285dmy: 'Blended Lime',
  dec385dmy: 'Blended Lime',
  dec485dmy: 'Blended Lime',
  dec585dmy: 'Blended Lime',
  dec685dmy: 'Blended Lime',
  dec785dmy: 'Blended Lime',
  dec885dmy: 'Blended Lime',
  dec985dmy: 'Blended Lime',
  feb585ymd: 'Immersive Aqua',
  feb585mdy: 'Global Gold',
  dec585ymd: 'Hybrid Teal',
  dec585mdy: 'Cultural Amber',
  
  // 2090s - Cosmic Horizon theme
  feb195dmy: 'Exoplanet Green',
  feb295dmy: 'Exoplanet Green',
  feb395dmy: 'Exoplanet Green',
  feb495dmy: 'Exoplanet Green',
  feb595dmy: 'Exoplanet Green',
  feb695dmy: 'Exoplanet Green',
  feb795dmy: 'Exoplanet Green',
  feb895dmy: 'Exoplanet Green',
  feb995dmy: 'Exoplanet Green',
  dec195dmy: 'Interstellar Lime',
  dec295dmy: 'Interstellar Lime',
  dec395dmy: 'Interstellar Lime',
  dec495dmy: 'Interstellar Lime',
  dec595dmy: 'Interstellar Lime',
  dec695dmy: 'Interstellar Lime',
  dec795dmy: 'Interstellar Lime',
  dec895dmy: 'Interstellar Lime',
  dec995dmy: 'Interstellar Lime',
  feb595ymd: 'Nebula Aqua',
  feb595mdy: 'Cosmic Gold',
  dec595ymd: 'Stardust Teal',
  dec595mdy: 'Solar Amber',
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
