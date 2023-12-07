var isoCountries=[{c:"af",l:"fa",id:"fa-2004",text:"Persa / Afganistán"},{c:"af",l:"ps",id:"ps-2004",text:"Pashto / Afganistán"},{c:"al",l:"sq",id:"sq-2008",text:"Albanés / Albania"},{c:"dz",l:"ar",id:"ar-2012",text:"Árabe / Argelia"},{c:"dz",l:"fr",id:"fr-2012",text:"Francés / Argelia"},{c:"as",l:"en",id:"en-2016",text:"Inglés / Samoa Americana"},{c:"as",l:"sm",id:"sm-2016",text:"Samoano / Samoa Americana"},{c:"ad",l:"ca",id:"ca-2020",text:"Catalán / Andorra"},{c:"ao",l:"pt",id:"pt-2024",text:"Portugués / Angola"},{c:"ai",l:"en",id:"en-2660",text:"Inglés / Anguila"},{c:"ag",l:"en",id:"en-2028",text:"Inglés / Antigua y Barbuda"},{c:"ar",l:"es",id:"es-2032",text:"Español / Argentina"},{c:"am",l:"hy",id:"hy-2051",text:"Armenio / Armenia"},{c:"aw",l:"nl",id:"nl-2533",text:"Holandés / Aruba"},{c:"au",l:"en",id:"en-2036",text:"Inglés / Australia"},{c:"at",l:"de",id:"de-2040",text:"Alemán / Austria"},{c:"az",l:"az",id:"az-2031",text:"Azero / Azerbaiyán"},{c:"bs",l:"en",id:"en-2044",text:"Inglés / Bahamas"},{c:"bh",l:"ar",id:"ar-2048",text:"Árabe / Bahrein"},{c:"bd",l:"bn",id:"bn-2050",text:"Bengalí / Bangladesh"},{c:"bb",l:"en",id:"en-2052",text:"Inglés / Barbados"},{c:"by",l:"be",id:"be-2112",text:"Bielorusso / Bielorussia"},{c:"be",l:"nl",id:"nl-2056",text:"Holandés / Bélgica"},{c:"be",l:"en",id:"en-2056",text:"Inglés / Bélgica"},{c:"be",l:"fr",id:"fr-2056",text:"Francés / Bélgica"},{c:"be",l:"de",id:"de-2056",text:"Alemán / Bélgica"},{c:"bz",l:"en",id:"en-2084",text:"Inglés / Belice"},{c:"bz",l:"es",id:"es-2084",text:"Español / Belice"},{c:"bj",l:"fr",id:"fr-2204",text:"Francés / Benin"},{c:"bm",l:"en",id:"en-2060",text:"Inglés / Bermudas"},{c:"bt",l:"dz",id:"dz-2064",text:"Butanés / Bután"},{c:"bt",l:"ne",id:"ne-2064",text:"Nepalí / Bután"},{c:"bo",l:"es",id:"es-2068",text:"Español / Bolivia"},{c:"ba",l:"bs",id:"bs-2070",text:"Bosnio / Bosnia y Herzegovina"},{c:"ba",l:"en",id:"en-2070",text:"Inglés / Bosnia y Herzegovina"},{c:"bw",l:"en",id:"en-2072",text:"Inglés / Botsuana"},{c:"bw",l:"tn",id:"tn-2072",text:"Tswana / Botsuana"},{c:"br",l:"pt",id:"pt-2076",text:"Portugués / Brasil"},{c:"io",l:"en",id:"en-2086",text:"Inglés / Territorio Británico del Océano Índico"},{c:"vg",l:"en",id:"en-2092",text:"Inglés / Islas Vírgenes Británicas"},{c:"bn",l:"ms",id:"ms-2096",text:"Malayo / Brunei Darussalam"},{c:"bg",l:"bg",id:"bg-2100",text:"Búlgaro / Bulgaria"},{c:"bf",l:"fr",id:"fr-2854",text:"Francés / Burkina Faso"},{c:"bi",l:"fr",id:"fr-2108",text:"Francés / Burundi"},{c:"bi",l:"rn",id:"rn-2108",text:"Rundi / Burundi"},{c:"cv",l:"pt",id:"pt-2132",text:"Portugués / Cabo Verde"},{c:"kh",l:"km",id:"km-2116",text:"Khmer central / Camboya"},{c:"cm",l:"en",id:"en-2120",text:"Inglés / Camerún"},{c:"cm",l:"fr",id:"fr-2120",text:"Francés / Camerún"},{c:"ca",l:"en",id:"en-2124",text:"Inglés / Canadá"},{c:"ca",l:"fr",id:"fr-2124",text:"Francés / Canadá"},{c:"ky",l:"en",id:"en-2136",text:"Inglés / Islas Caimán"},{c:"cf",l:"fr",id:"fr-2140",text:"Francés / República Centroafricana"},{c:"cf",l:"sg",id:"sg-2140",text:"Sango / República Centroafricana"},{c:"td",l:"ar",id:"ar-2148",text:"Árabe / Chad"},{c:"td",l:"fr",id:"fr-2148",text:"Francés / Chad"},{c:"cl",l:"es",id:"es-2152",text:"Español / Chile"},{c:"cn",l:"zh_cn",id:"zh_cn-2156",text:"Chino / China"},{c:"cx",l:"en",id:"en-2162",text:"Inglés / Isla de Navidad"},{c:"cc",l:"en",id:"en-2166",text:"Inglés / Islas Cocos"},{c:"co",l:"es",id:"es-2170",text:"Español / Colombia"},{c:"km",l:"ar",id:"ar-2174",text:"Árabe / Comoras"},{c:"km",l:"fr",id:"fr-2174",text:"Francés / Comoras"},{c:"cg",l:"fr",id:"fr-2178",text:"Francés / Congo"},{c:"ck",l:"en",id:"en-2184",text:"Inglés / Islas Cook"},{c:"cr",l:"es",id:"es-2188",text:"Español / Costa Rica"},{c:"ci",l:"fr",id:"fr-2384",text:"Francés / Costa de Marfil"},{c:"hr",l:"hr",id:"hr-2191",text:"Croata / Croacia"},{c:"cy",l:"en",id:"en-2196",text:"Inglés / Chipre"},{c:"cy",l:"el",id:"el-2196",text:"Griego / Chipre"},{c:"cz",l:"cs",id:"cs-2203",text:"Checo / República Checa"},{c:"dk",l:"da",id:"da-2208",text:"Danés / Dinamarca"},{c:"dj",l:"aa",id:"aa-2262",text:"Afar / Djibouti"},{c:"dj",l:"so",id:"so-2262",text:"Somalí / Djibouti"},{c:"dm",l:"en",id:"en-2212",text:"Inglés / Dominica"},{c:"do",l:"es",id:"es-2214",text:"Español / República Dominicana"},{c:"cd",l:"sw",id:"sw-2180",text:"Swahili / República Democrática del Congo"},{c:"ec",l:"es",id:"es-2218",text:"Español / Ecuador"},{c:"eg",l:"ar",id:"ar-2818",text:"Árabe / Egipto"},{c:"eg",l:"en",id:"en-2818",text:"Inglés / Egipto"},{c:"sv",l:"es",id:"es-2222",text:"Español / El Salvador"},{c:"gq",l:"es",id:"es-2226",text:"Español / Guinea Ecuatorial"},{c:"er",l:"en",id:"en-2232",text:"Inglés / Eritrea"},{c:"er",l:"ti",id:"ti-2232",text:"Tigriña / Eritrea"},{c:"ee",l:"et",id:"et-2233",text:"Estonio / Estonia"},{c:"sz",l:"en",id:"en-2748",text:"Inglés / Essuatini"},{c:"sz",l:"ss",id:"ss-2748",text:"Swati / Essuatini"},{c:"et",l:"am",id:"am-2231",text:"Amarico / Etiopía"},{c:"et",l:"en",id:"en-2231",text:"Inglés / Etiopía"},{c:"et",l:"om",id:"om-2231",text:"Oromo / Etiopía"},{c:"fk",l:"en",id:"en-2238",text:"Inglés / Islas Malvinas"},{c:"fo",l:"fo",id:"fo-2234",text:"Feroés / Islas Faroe"},{c:"fj",l:"en",id:"en-2242",text:"Inglés / Fiyi"},{c:"fj",l:"fj",id:"fj-2242",text:"Fiyiano / Fiyi"},{c:"fj",l:"hi",id:"hi-2242",text:"Hindi / Fiyi"},{c:"fi",l:"fi",id:"fi-2246",text:"Finlandés / Finlandia"},{c:"fr",l:"fr",id:"fr-2250",text:"Francés / Francia"},{c:"gf",l:"fr",id:"fr-2254",text:"Francés / Guayana Francesa"},{c:"pf",l:"fr",id:"fr-2258",text:"Francés / Polinesia Francesa"},{c:"pf",l:"ty",id:"ty-2258",text:"Tahitiano / Polinesia Francesa"},{c:"tf",l:"fr",id:"fr-2260",text:"Francés / Tierras australes y antárticas francesas"},{c:"ga",l:"fr",id:"fr-2266",text:"Francés / Gabón"},{c:"gm",l:"en",id:"en-2270",text:"Inglés / Gambia"},{c:"ge",l:"ka",id:"ka-2268",text:"Georgiano / Georgia"},{c:"de",l:"de",id:"de-2276",text:"Alemán / Alemania"},{c:"gh",l:"ak",id:"ak-2288",text:"Akan / Ghana"},{c:"gh",l:"en",id:"en-2288",text:"Inglés / Ghana"},{c:"gi",l:"en",id:"en-2292",text:"Inglés / Gibraltar"},{c:"gi",l:"es",id:"es-2292",text:"Español / Gibraltar"},{c:"gr",l:"el",id:"el-2300",text:"Griego / Grecia"},{c:"gl",l:"kl",id:"kl-2304",text:"Groelandés / Groenlandia"},{c:"gd",l:"en",id:"en-2308",text:"Inglés / Granada"},{c:"gp",l:"fr",id:"fr-2312",text:"Francés / Guadalupe"},{c:"gu",l:"ch",id:"ch-2316",text:"Chamorro / Guam"},{c:"gu",l:"en",id:"en-2316",text:"Inglés / Guam"},{c:"gt",l:"es",id:"es-2320",text:"Español / Guatemala"},{c:"gg",l:"en",id:"en-2831",text:"Inglés / Guernsey"},{c:"gn",l:"fr",id:"fr-2324",text:"Francés / Guinea"},{c:"gn",l:"ff",id:"ff-2324",text:"Fulah / Guinea"},{c:"gw",l:"pt",id:"pt-2624",text:"Portugués / Guinea-Bissau"},{c:"gy",l:"en",id:"en-2328",text:"Inglés / Guayana"},{c:"ht",l:"ht",id:"ht-2332",text:"Haitiano / Haití"},{c:"va",l:"it",id:"it-2336",text:"Italiano / Santa Sede"},{c:"va",l:"la",id:"la-2336",text:"Latín / Santa Sede"},{c:"hn",l:"es",id:"es-2340",text:"Español / Honduras"},{c:"hk",l:"zh_cn",id:"zh_cn-2344",text:"Chino / Hong Kong"},{c:"hk",l:"en",id:"en-2344",text:"Inglés / Hong Kong"},{c:"hu",l:"hu",id:"hu-2348",text:"Húngaro / Hungría"},{c:"is",l:"is",id:"is-2352",text:"Islandés / Islandia"},{c:"in",l:"en",id:"en-2356",text:"Inglés / India"},{c:"id",l:"id",id:"id-2360",text:"Indonesio / Indonesia"},{c:"iq",l:"ar",id:"ar-2368",text:"Árabe / Irak"},{c:"iq",l:"en",id:"en-2368",text:"Inglés / Irak"},{c:"ie",l:"en",id:"en-2372",text:"Inglés / Irlanda"},{c:"il",l:"ar",id:"ar-2376",text:"Árabe / Israel"},{c:"il",l:"iw",id:"iw-2376",text:"Hebreo / Israel"},{c:"it",l:"it",id:"it-2380",text:"Italiano / Italia"},{c:"jm",l:"en",id:"en-2388",text:"Inglés / Jamaica"},{c:"jp",l:"ja",id:"ja-2392",text:"Japonés / Japón"},{c:"je",l:"en",id:"en-2832",text:"Inglés / Jersey"},{c:"jo",l:"ar",id:"ar-2400",text:"Árabe / Jordán"},{c:"kz",l:"en",id:"en-2398",text:"Inglés / Kazajistán"},{c:"kz",l:"kk",id:"kk-2398",text:"Kazako / Kazajistán"},{c:"kz",l:"ru",id:"ru-2398",text:"Ruso / Kazajistán"},{c:"ke",l:"en",id:"en-2404",text:"Inglés / Kenia"},{c:"ke",l:"ki",id:"ki-2404",text:"Kikuyu / Kenia"},{c:"ke",l:"sw",id:"sw-2404",text:"Swahili / Kenia"},{c:"ki",l:"en",id:"en-2296",text:"Inglés / Kiribati"},{c:"kw",l:"ar",id:"ar-2414",text:"Árabe / Kuwait"},{c:"kg",l:"ky",id:"ky-2417",text:"Kirguís / Kirguistán"},{c:"kg",l:"ru",id:"ru-2417",text:"Ruso / Kirguistán"},{c:"la",l:"lo",id:"lo-2418",text:"Laosiano / República Democrática Popular Lao"},{c:"lv",l:"lv",id:"lv-2428",text:"Letón / Letonia"},{c:"lb",l:"ar",id:"ar-2422",text:"Árabe / Líbano"},{c:"lb",l:"en",id:"en-2422",text:"Inglés / Líbano"},{c:"ls",l:"en",id:"en-2426",text:"Inglés / Lesoto"},{c:"ls",l:"st",id:"st-2426",text:"Sesoto / Lesoto"},{c:"lr",l:"en",id:"en-2430",text:"Inglés / Liberia"},{c:"ly",l:"ar",id:"ar-2434",text:"Árabe / Libia"},{c:"li",l:"de",id:"de-2438",text:"Alemán / Liechtenstein"},{c:"lt",l:"lt",id:"lt-2440",text:"Báltico / Lituania"},{c:"lu",l:"fr",id:"fr-2442",text:"Francés / Luxemburgo"},{c:"lu",l:"de",id:"de-2442",text:"Alemán / Luxemburgo"},{c:"mg",l:"en",id:"en-2450",text:"Inglés / Madagascar"},{c:"mg",l:"fr",id:"fr-2450",text:"Francés / Madagascar"},{c:"mg",l:"mg",id:"mg-2450",text:"Malgache / Madagascar"},{c:"mw",l:"en",id:"en-2454",text:"Inglés / Malawi"},{c:"mw",l:"ny",id:"ny-2454",text:"Nyanja / Malawi"},{c:"my",l:"zh_cn",id:"zh_cn-2458",text:"Chino / Malasia"},{c:"my",l:"en",id:"en-2458",text:"Inglés / Malasia"},{c:"my",l:"ms",id:"ms-2458",text:"Malayo / Malasia"},{c:"mv",l:"dv",id:"dv-2462",text:"Dhivehi / Maldivas"},{c:"ml",l:"bm",id:"bm-2466",text:"Bambara / Mali"},{c:"ml",l:"fr",id:"fr-2466",text:"Francés / Mali"},{c:"mt",l:"en",id:"en-2470",text:"Inglés / Malta"},{c:"mh",l:"en",id:"en-2584",text:"Inglés / Islas Marshall"},{c:"mh",l:"mh",id:"mh-2584",text:"Marshalés / Islas Marshall"},{c:"mq",l:"fr",id:"fr-2474",text:"Francés / Martinica"},{c:"mr",l:"ar",id:"ar-2478",text:"Árabe / Mauritania"},{c:"mr",l:"fr",id:"fr-2478",text:"Francés / Mauritania"},{c:"mu",l:"en",id:"en-2480",text:"Inglés / Mauricio"},{c:"yt",l:"fr",id:"fr-2175",text:"Francés / Mayotte"},{c:"mx",l:"es",id:"es-2484",text:"Español / México"},{c:"fm",l:"en",id:"en-2583",text:"Inglés / Micronesia"},{c:"md",l:"ro",id:"ro-2498",text:"Rumano / Moldavia"},{c:"mc",l:"fr",id:"fr-2492",text:"Francés / Mónaco"},{c:"mn",l:"mn",id:"mn-2496",text:"Mongol / Mongolia"},{c:"ms",l:"en",id:"en-2500",text:"Inglés / Montserrat"},{c:"ma",l:"ar",id:"ar-2504",text:"Árabe / Marruecos"},{c:"mz",l:"pt",id:"pt-2508",text:"Portugués / Mozambique"},{c:"mm",l:"my",id:"my-2104",text:"Birmano / Myanmar"},{c:"na",l:"af",id:"af-2516",text:"Afrikaans / Namibia"},{c:"na",l:"kj",id:"kj-2516",text:"Kuanyama / Namibia"},{c:"na",l:"ng",id:"ng-2516",text:"Ndonga / Namibia"},{c:"nr",l:"en",id:"en-2520",text:"Inglés / Nauru"},{c:"nr",l:"na",id:"na-2520",text:"Nauruano / Nauru"},{c:"np",l:"ne",id:"ne-2524",text:"Nepalí / Nepal"},{c:"nl",l:"nl",id:"nl-2528",text:"Holandés / Países Bajos"},{c:"nc",l:"fr",id:"fr-2540",text:"Francés / Nueva Caledonia"},{c:"nz",l:"en",id:"en-2554",text:"Inglés / Nueva Zelanda"},{c:"ni",l:"es",id:"es-2558",text:"Español / Nicaragua"},{c:"ne",l:"fr",id:"fr-2562",text:"Francés / Níger"},{c:"ne",l:"ha",id:"ha-2562",text:"Hausa / Níger"},{c:"ng",l:"en",id:"en-2566",text:"Inglés / Nigeria"},{c:"nu",l:"en",id:"en-2570",text:"Inglés / Niue"},{c:"nf",l:"en",id:"en-2574",text:"Inglés / Isla Norfolk"},{c:"mp",l:"ch",id:"ch-2580",text:"Chamorro / Islas Marianas del Norte"},{c:"mp",l:"en",id:"en-2580",text:"Inglés / Islas Marianas del Norte"},{c:"no",l:"no",id:"no-2578",text:"Noruego / Noruega"},{c:"om",l:"ar",id:"ar-2512",text:"Árabe / Omán"},{c:"pk",l:"en",id:"en-2586",text:"Inglés / Pakistán"},{c:"pk",l:"ur",id:"ur-2586",text:"Urdu / Pakistán"},{c:"ps",l:"ar",id:"ar-2275",text:"Árabe / Palestina"},{c:"pa",l:"es",id:"es-2591",text:"Español / Panamá"},{c:"pg",l:"en",id:"en-2598",text:"Inglés / Papúa Nueva Guinea"},{c:"py",l:"es",id:"es-2600",text:"Español / Paraguay"},{c:"pe",l:"es",id:"es-2604",text:"Español / Perú"},{c:"ph",l:"en",id:"en-2608",text:"Inglés / Filipinas"},{c:"ph",l:"tl",id:"tl-2608",text:"Tagalo / Filipinas"},{c:"pn",l:"en",id:"en-2612",text:"Inglés / Pitcairn"},{c:"pl",l:"pl",id:"pl-2616",text:"Polaco / Polonia"},{c:"pt",l:"pt",id:"pt-2620",text:"Portugués / Portugal"},{c:"pr",l:"es",id:"es-2630",text:"Español / Puerto Rico"},{c:"qa",l:"ar",id:"ar-2634",text:"Árabe / Catar"},{c:"mk",l:"sq",id:"sq-2807",text:"Albanés / República de Macedonia del norte"},{c:"mk",l:"mk",id:"mk-2807",text:"Macedonio / República de Macedonia del norte"},{c:"re",l:"fr",id:"fr-2638",text:"Francés / Reunión"},{c:"re",l:"ta",id:"ta-2638",text:"Tamil / Reunión"},{c:"ro",l:"ro",id:"ro-2642",text:"Rumano / Rumania"},{c:"ru",l:"ru",id:"ru-2643",text:"Ruso / Federación de Rusia"},{c:"rw",l:"en",id:"en-2646",text:"Inglés / Ruanda"},{c:"rw",l:"rw",id:"rw-2646",text:"Kiñaruanda / Ruanda"},{c:"sh",l:"en",id:"en-2654",text:"Inglés / Santa Elena, Ascensión y Tristán de Acuña"},{c:"kn",l:"en",id:"en-2659",text:"Inglés / San Cristóbal y Nieves"},{c:"lc",l:"en",id:"en-2662",text:"Inglés / Santa Lucía"},{c:"pm",l:"fr",id:"fr-2666",text:"Francés / San Pedro y Miquelón"},{c:"vc",l:"en",id:"en-2670",text:"Inglés / San Vicente y las Granadinas"},{c:"ws",l:"sm",id:"sm-2882",text:"Samoano / Samoa"},{c:"sm",l:"it",id:"it-2674",text:"Italiano / San Marino"},{c:"st",l:"pt",id:"pt-2678",text:"Portugués / Santo Tomé y Príncipe"},{c:"sa",l:"ar",id:"ar-2682",text:"Árabe / Arabia Saudita"},{c:"sn",l:"fr",id:"fr-2686",text:"Francés / Senegal"},{c:"sn",l:"ff",id:"ff-2686",text:"Fulah / Senegal"},{c:"sn",l:"wo",id:"wo-2686",text:"Wolof / Senegal"},{c:"rs",l:"sr",id:"sr-2688",text:"Serbio / Serbia"},{c:"sc",l:"en",id:"en-2690",text:"Inglés / Seychellen"},{c:"sc",l:"fr",id:"fr-2690",text:"Francés / Seychellen"},{c:"sl",l:"en",id:"en-2694",text:"Inglés / Sierra Leona"},{c:"sg",l:"zh_cn",id:"zh_cn-2702",text:"Chino / Singapur"},{c:"sg",l:"en",id:"en-2702",text:"Inglés / Singapur"},{c:"sx",l:"en",id:"en-2534",text:"Inglés / San Martín (Holanda)"},{c:"sk",l:"sk",id:"sk-2703",text:"Eslovaco / Eslovaquia"},{c:"si",l:"sl",id:"sl-2705",text:"Esloveno / Eslovenia"},{c:"sb",l:"en",id:"en-2090",text:"Inglés / Islas Salomón"},{c:"so",l:"ar",id:"ar-2706",text:"Árabe / Somalia"},{c:"so",l:"so",id:"so-2706",text:"Somalí / Somalia"},{c:"za",l:"en",id:"en-2710",text:"Inglés / África del Sur"},{c:"kr",l:"ko",id:"ko-2410",text:"Coreano / Corea del Sur"},{c:"es",l:"ca",id:"ca-2724",text:"Catalán / España"},{c:"es",l:"es",id:"es-2724",text:"Español / España"},{c:"lk",l:"en",id:"en-2144",text:"Inglés / Sri Lanka"},{c:"sr",l:"nl",id:"nl-2740",text:"Holandés / Surinam"},{c:"sj",l:"nb",id:"nb-2744",text:"Bokmål noruegués / Svalbard y Jan Mayen"},{c:"sj",l:"ru",id:"ru-2744",text:"Ruso / Svalbard y Jan Mayen"},{c:"se",l:"sv",id:"sv-2752",text:"Sueco / Suecia"},{c:"ch",l:"en",id:"en-2756",text:"Inglés / Suiza"},{c:"ch",l:"fr",id:"fr-2756",text:"Francés / Suiza"},{c:"ch",l:"de",id:"de-2756",text:"Alemán / Suiza"},{c:"ch",l:"it",id:"it-2756",text:"Italiano / Suiza"},{c:"tw",l:"zh_tw",id:"zh_tw-2158",text:"Chino / Taiwán"},{c:"tj",l:"tg",id:"tg-2762",text:"Tayiko / Tayikistán"},{c:"tz",l:"en",id:"en-2834",text:"Inglés / Tanzania"},{c:"tz",l:"sw",id:"sw-2834",text:"Swahili / Tanzania"},{c:"th",l:"th",id:"th-2764",text:"Tailandés / Tailandia"},{c:"tl",l:"pt",id:"pt-2626",text:"Portugués / Timor Oriental"},{c:"tg",l:"ee",id:"ee-2768",text:"Ewé / Togo"},{c:"tg",l:"fr",id:"fr-2768",text:"Francés / Togo"},{c:"tk",l:"en",id:"en-2772",text:"Inglés / Tokelau"},{c:"to",l:"en",id:"en-2776",text:"Inglés / Tonga"},{c:"to",l:"to",id:"to-2776",text:"Tongano / Tonga"},{c:"tt",l:"en",id:"en-2780",text:"Inglés / Trinidad y Tobago"},{c:"tn",l:"ar",id:"ar-2788",text:"Árabe / Túnez"},{c:"tr",l:"tr",id:"tr-2792",text:"Turco / Turquía"},{c:"tm",l:"tk",id:"tk-2795",text:"Turcomano / Turkmenistán"},{c:"tc",l:"en",id:"en-2796",text:"Inglés / Islas Turcas y Caicos"},{c:"vi",l:"en",id:"en-2850",text:"Inglés / Islas Vírgenes de EE.UU"},{c:"ug",l:"sw",id:"sw-2800",text:"Swahili / Uganda"},{c:"ua",l:"uk",id:"uk-2804",text:"Ucraniano / Ucrania"},{c:"ae",l:"ar",id:"ar-2784",text:"Árabe / Emiratos Árabes Unidos"},{c:"ae",l:"en",id:"en-2784",text:"Inglés / Emiratos Árabes Unidos"},{c:"gb",l:"en",id:"en-2826",text:"Inglés / Reino Unido"},{c:"us",l:"en",id:"en-2840",text:"Inglés / Estados Unidos"},{c:"um",l:"en",id:"en-2581",text:"Inglés / Islas Ultramarinas Menores de los Estados Unidos"},{c:"uy",l:"es",id:"es-2858",text:"Español / Uruguay"},{c:"uz",l:"uz",id:"uz-2860",text:"Uzbeko / Uzbekistán"},{c:"vu",l:"bi",id:"bi-2548",text:"Bislama / Vanuatu"},{c:"vu",l:"en",id:"en-2548",text:"Inglés / Vanuatu"},{c:"vu",l:"fr",id:"fr-2548",text:"Francés / Vanuatu"},{c:"ve",l:"es",id:"es-2862",text:"Español / Venezuela"},{c:"vn",l:"vi",id:"vi-2704",text:"Vietnamita / Vietnam"},{c:"wf",l:"fr",id:"fr-2876",text:"Francés / Wallis y Futuna"},{c:"eh",l:"ar",id:"ar-2732",text:"Árabe / Sahara Occidental"},{c:"ye",l:"ar",id:"ar-2887",text:"Árabe / Yemen"},{c:"zm",l:"en",id:"en-2894",text:"Inglés / Zambia"},{c:"zm",l:"ny",id:"ny-2894",text:"Nyanja / Zambia"},{c:"zw",l:"en",id:"en-2716",text:"Inglés / Zimbabue"},{c:"zw",l:"sn",id:"sn-2716",text:"Shona / Zimbabue"}];