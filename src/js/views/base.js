export const elements = {
    searchForm: document.querySelector('.search'),
    searchInput: document.querySelector('.search__field'),
    searchRes: document.querySelector('.results'),
    searchResList: document.querySelector('.results__list'),
    searchResPages: document.querySelector('.results__pages'),
    recipe: document.querySelector('.recipe'),
    shopping: document.querySelector('.shopping__list'),
    total: document.querySelector('.total'),
    likesMenu: document.querySelector('.likes__field'),
    likesList: document.querySelector('.likes__list'),
    closeModalButton: document.querySelector('.modal-close'),
    closePayformButton: document.querySelector('.payform-close'),
    container: document.querySelector('.container'),
    payButton: document.querySelector('[data-modal-target]'),
    popup: document.querySelector('.popup')
};
//<script type="text/javascript" src="js/bundle.js"></script></body>
export const elementStrings = {
    loader: 'loader'
};

export const renderLoader = parent => {
    const loader = `
        <div class="${elementStrings.loader}">
            <svg>
                <path d="M19.315 10h-2.372v-0.205c-0.108-4.434-3.724-7.996-8.169-7.996-4.515 0-8.174 3.672-8.174 8.201s3.659 8.199 8.174 8.199c1.898 0 3.645-0.65 5.033-1.738l-1.406-1.504c-1.016 0.748-2.27 1.193-3.627 1.193-3.386 0-6.131-2.754-6.131-6.15s2.745-6.15 6.131-6.15c3.317 0 6.018 2.643 6.125 5.945v0.205h-2.672l3.494 3.894 3.594-3.894z"></path>
            </svg>
        </div>
    `;
    parent.insertAdjacentHTML('afterbegin', loader);
};

export const clearLoader = () => {
    const loader = document.querySelector(`.${elementStrings.loader}`);
    if (loader) loader.parentElement.removeChild(loader);
};

export const items = [
    {
        img: "./img/products/ba_show_hoodie_white.png",
        publisher: "BURIEDALIVE",
        id: "1",
        title: "BA Show Hoodie (White)",
        price: 349
    },
    
    {
        img: "./img/products/ba_show_hoodie_yellow.png",
        publisher: "BURIEDALIVE",
        id: "2",
        title: "BA Show Hoodie (Yellow)",
        price: 349
    },
    
    {
        img: "./img/products/ba_bold_logo_hoodie_blue.png",
        publisher: "BURIEDALIVE",
        id: "3",
        title: "BA Bold Logo Hoodie (Blue)",
        price: 350
    },
    
    {
        img: "./img/products/ba_bold_logo_hoodie_orange.png",
        publisher: "BURIEDALIVE",
        id: "4",
        title: "BA Bold Logo Hoodie (Orange)",
        price: 350
    },
    
    {
        img: "./img/products/ba_new_logo_hoodie_green.png",
        publisher: "BURIEDALIVE",
        id: "5",
        title: "BA New Logo Hoodie (Green)",
        price: 341
    },
    
    {
        img: "./img/products/ba_new_logo_hoodie_grey.png",
        publisher: "BURIEDALIVE",
        id: "6",
        title: "BA New Logo Hoodie (Grey)",
        price: 341
    },
    
    {
        img: "./img/products/ba_m_color_hoodie_sky_blue.png",
        publisher: "BURIEDALIVE",
        id: "7",
        title: "BA M.Color Hoodie (Sky Blue)",
        price: 305
    },
    
    {
        img: "./img/products/ba_alive_logo_hoodie_black.png",
        publisher: "BURIEDALIVE",
        id: "8",
        title: "BA Alive Logo Hoodie (Black)",
        price: 329
    },
    
    {
        img: "./img/products/jeunesse_signature_hoodie_grey.png",
        publisher: "JEUNESSE",
        id: "9",
        title: "Jeunesse Signature Hoodie (Grey)",
        price: 354
    },
    
    {
        img: "./img/products/jeunesse_signature_hoodie_yellow.png",
        publisher: "JEUNESSE",
        id: "10",
        title: "Jeunesse Signature Hoodie (Yellow)",
        price: 354
    },
    
    {
        img: "./img/products/jeunesse_signature_hoodie_green.png",
        publisher: "JEUNESSE",
        id: "11",
        title: "Jeunesse Signature Hoodie (Green)",
        price: 354
    },
    
    {
        img: "./img/products/jeunesse_signature_hoodie_black.png",
        publisher: "JEUNESSE",
        id: "12",
        title: "Jeunesse Signature Hoodie (Black)",
        price: 354
    },
    
    {
        img: "./img/products/rainbow_worldwide_hoodie_grey.png",
        publisher: "AMES-WORLDWIDE",
        id: "13",
        title: "Rainbow Worldwide Hoodie (Grey)",
        price: 223
    },
    
    {
        img: "./img/products/rainbow_worldwide_hoodie_black.png",
        publisher: "AMES-WORLDWIDE",
        id: "14",
        title: "Rainbow Worldwide Hoodie (Black)",
        price: 223
    },
    
    {
        img: "./img/products/rainbow_worldwide_dream_logo_hoodie_red.png",
        publisher: "AMES-WORLDWIDE",
        id: "15",
        title: "Rainbow Worldwide Dream Logo Hoodie (Red)",
        price: 209
    },
    
    {
        img: "./img/products/rainbow_worldwide_dream_logo_hoodie_navy.png",
        publisher: "AMES-WORLDWIDE",
        id: "16",
        title: "Rainbow Worldwide Dream Logo Hoodie (Navy)",
        price: 209
    },
    
    {
        img: "./img/products/worldwide_arch_logo_hoodie_black.png",
        publisher: "AMES-WORLDWIDE",
        id: "17",
        title: "Worldwide Arch Logo Hoodie (Black)",
        price: 207
    },
    
    {
        img: "./img/products/worldwide_arch_logo_hoodie_grey.png",
        publisher: "AMES-WORLDWIDE",
        id: "18",
        title: "Worldwide Arch Logo Hoodie (Grey)",
        price: 207
    },
    
    {
        img: "./img/products/worldwide_arch_logo_hoodie_pink.png",
        publisher: "AMES-WORLDWIDE",
        id: "19",
        title: "Worldwide Arch Logo Hoodie (Pink)",
        price: 207
    },
    
    {
        img: "./img/products/worldwide_arch_logo_hoodie_purple.png",
        publisher: "AMES-WORLDWIDE",
        id: "20",
        title: "Worldwide Arch Logo Hoodie (Purple)",
        price: 207
    },
    
    {
        img: "./img/products/etoiles_hoodie_black.png",
        publisher: "JEUNESSE",
        id: "21",
        title: "Etoiles Hoodie (Black)",
        price: 329
    },
    
    {
        img: "./img/products/etoiles_hoodie_brown.png",
        publisher: "JEUNESSE",
        id: "22",
        title: "Etoiles Hoodie (Brown)",
        price: 329
    },
    
    {
        img: "./img/products/etoiles_hoodie_navy.png",
        publisher: "JEUNESSE",
        id: "23",
        title: "Etoiles Hoodie (Navy)",
        price: 329
    },
    
    {
        img: "./img/products/etoiles_hoodie_blue.png",
        publisher: "JEUNESSE",
        id: "24",
        title: "Etoiles Hoodie (Blue)",
        price: 329
    },
    
    {
        img: "./img/products/side_line_logo_tee_black.png",
        publisher: "VIBRATE",
        id: "25",
        title: "Side Line Logo Tee (Black)",
        price: 364
    },
    
    {
        img: "./img/products/side_line_logo_tee_pink.png",
        publisher: "VIBRATE",
        id: "26",
        title: "Side Line Logo Tee (Pink)",
        price: 364
    },
    
    {
        img: "./img/products/v_big_logo_tee_black.png",
        publisher: "VIBRATE",
        id: "27",
        title: "V Big Logo Tee (Black)",
        price: 337
    },
    
    {
        img: "./img/products/v_big_logo_tee_white.png",
        publisher: "VIBRATE",
        id: "28",
        title: "V Big Logo Tee (White)",
        price: 337
    },
    
    {
        img: "./img/products/maison_tee_green.png",
        publisher: "JEUNESSE",
        id: "29",
        title: "Maison Tee (Green)",
        price: 139
    },
    
    {
        img: "./img/products/maison_tee_grey.png",
        publisher: "JEUNESSE",
        id: "30",
        title: "Maison Tee (Grey)",
        price: 139
    },
    
    {
        img: "./img/products/maison_tee_navy.png",
        publisher: "JEUNESSE",
        id: "31",
        title: "Maison Tee (Navy)",
        price: 139
    },
    
    {
        img: "./img/products/maison_tee_black.png",
        publisher: "JEUNESSE",
        id: "32",
        title: "Maison Tee (Black)",
        price: 139
    },
    
    {
        img: "./img/products/maison_tee_white.png",
        publisher: "JEUNESSE",
        id: "33",
        title: "Maison Tee (White)",
        price: 139
    },
    
    {
        img: "./img/products/jnss_logo_tee_black.png",
        publisher: "JEUNESSE",
        id: "34",
        title: "JNSS Logo Tee (Black)",
        price: 139
    },
    
    {
        img: "./img/products/jnss_logo_tee_navy.png",
        publisher: "JEUNESSE",
        id: "35",
        title: "JNSS Logo Tee (Navy)",
        price: 139
    },
    
    {
        img: "./img/products/jnss_logo_tee_white.png",
        publisher: "JEUNESSE",
        id: "36",
        title: "JNSS Logo Tee (White)",
        price: 139
    },
    
    {
        img: "./img/products/worldwide_double_arch_logo_tee_black.png",
        publisher: "AMES-WORLDWIDE",
        id: "37",
        title: "Worldwide Double Arch Logo Tee (Black)",
        price: 103
    },
    
    {
        img: "./img/products/worldwide_double_arch_logo_tee_coral.png",
        publisher: "AMES-WORLDWIDE",
        id: "38",
        title: "Worldwide Double Arch Logo Tee (Coral)",
        price: 103
    },
    
    {
        img: "./img/products/worldwide_double_arch_logo_tee_ivory.png",
        publisher: "AMES-WORLDWIDE",
        id: "39",
        title: "Worldwide Double Arch Logo Tee (Ivory)",
        price: 103
    },
    
    {
        img: "./img/products/worldwide_double_arch_logo_tee_yellow.png",
        publisher: "AMES-WORLDWIDE",
        id: "40",
        title: "Worldwide Double Arch Logo Tee (Yellow)",
        price: 103
    },
    
    {
        img: "./img/products/worldwide_arch_logo_tee_black.png",
        publisher: "AMES-WORLDWIDE",
        id: "41",
        title: "Worldwide Arch Logo Tee (Black)",
        price: 102
    },
    
    {
        img: "./img/products/worldwide_arch_logo_tee_pink.png",
        publisher: "AMES-WORLDWIDE",
        id: "42",
        title: "Worldwide Arch Logo Tee (Pink)",
        price: 102
    },
    
    {
        img: "./img/products/worldwide_arch_logo_tee_white.png",
        publisher: "AMES-WORLDWIDE",
        id: "43",
        title: "Worldwide Arch Logo Tee (White)",
        price: 102
    },
    
    {
        img: "./img/products/message_tee_black.png",
        publisher: "AMES-WORLDWIDE",
        id: "44",
        title: "Message Tee (Black)",
        price: 102
    },
    
    {
        img: "./img/products/message_tee_ivory.png",
        publisher: "AMES-WORLDWIDE",
        id: "45",
        title: "Message Tee (Ivory)",
        price: 102
    },
    
    {
        img: "./img/products/message_tee_pink.png",
        publisher: "AMES-WORLDWIDE",
        id: "46",
        title: "Message Tee (Pink)",
        price: 102
    },
    
    {
        img: "./img/products/rainbow_worldwide_dream_logo_tee_black.png",
        publisher: "AMES-WORLDWIDE",
        id: "47",
        title: "Rainbow Worldwide Dream Logo Tee (Black)",
        price: 102
    },
    
    {
        img: "./img/products/rainbow_worldwide_dream_logo_tee_navy.png",
        publisher: "AMES-WORLDWIDE",
        id: "48",
        title: "Rainbow Worldwide Dream Logo Tee (Navy)",
        price: 102
    },
    
    {
        img: "./img/products/side_line_logo_short_pants_black.png",
        publisher: "VIBRATE",
        id: "49",
        title: "Side Line Logo Short Pants (Black)",
        price: 353
    },
    
    {
        img: "./img/products/side_line_logo_short_pants_pink.png",
        publisher: "VIBRATE",
        id: "50",
        title: "Side Line Logo Short Pants (Pink)",
        price: 353
    },
    
    {
        img: "./img/products/ba_alive_logo_short_pants_blue.png",
        publisher: "BURIEDALIVE",
        id: "51",
        title: "BA Alive Logo Short Pants (Blue)",
        price: 185
    },
    
    {
        img: "./img/products/ba_alive_logo_short_pants_purple.png",
        publisher: "BURIEDALIVE",
        id: "52",
        title: "BA Alive Logo Short Pants (Purple)",
        price: 185
    },
    
    {
        img: "./img/products/ba_training_pants_black.png",
        publisher: "BURIEDALIVE",
        id: "53",
        title: "BA Training Pants (Black)",
        price: 265
    },
    
    {
        img: "./img/products/ba_training_pants_navy.png",
        publisher: "BURIEDALIVE",
        id: "54",
        title: "BA Training Pants (Navy)",
        price: 265
    },
    
    {
        img: "./img/products/ba_logo_sweat_pants_black.png",
        publisher: "BURIEDALIVE",
        id: "55",
        title: "BA Logo Sweat Pants (Black)",
        price: 300
    },
    
    {
        img: "./img/products/ba_logo_sweat_pants_yellow.png",
        publisher: "BURIEDLALIVE",
        id: "56",
        title: "BA Logo Sweat Pants (Yellow)",
        price: 300
    },
    
    {
        img: "./img/products/overpiping_track_pants_orange.png",
        publisher: "JEUNESSE",
        id: "57",
        title: "Overpiping Track Pants (Orange)",
        price: 328
    },
    
    {
        img: "./img/products/overpiping_track_pants_navy.png",
        publisher: "JEUNESSE",
        id: "58",
        title: "Overpiping Track Pants (Navy)",
        price: 328
    },
    
    {
        img: "./img/products/velour_jogger_wine.png",
        publisher: "JEUNESSE",
        id: "59",
        title: "Velour Jogger (Wine)",
        price: 341
    },
    
    {
        img: "./img/products/velour_jogger_black.png",
        publisher: "JEUNESSE",
        id: "60",
        title: "Velour Jogger (Black)",
        price: 341
    },
    
    {
        img: "./img/products/reflex_tape_jogger_pants_black.png",
        publisher: "VIBRATE",
        id: "61",
        title: "Reflex Tape Jogger Pants (Black)",
        price: 556
    },
    
    {
        img: "./img/products/reflex_tape_jogger_pants_grey.png",
        publisher: "VIBRATE",
        id: "62",
        title: "Reflex Tape Jogger Pants (Grey)",
        price: 556
    },
    
    {
        img: "./img/products/side_logo_print_jersey_pants_white.png",
        publisher: "VIBRATE",
        id: "63",
        title: "Side Logo Print Jersey Pants (White)",
        price: 450
    },
    
    {
        img: "./img/products/side_logo_print_jersey_pants_red.png",
        publisher: "VIBRATE",
        id: "64",
        title: "Side Logo Print Jersey Pants (Red)",
        price: 450
    },
    
    {
        img: "./img/products/side_logo_print_jersey_pants_black.png",
        publisher: "VIBRATE",
        id: "65",
        title: "Side Logo Print Jersey Pants (Black)",
        price: 450
    },
    
    
    {
        img: "./img/products/twisted_logo_jogger_pants_yellow.png",
        publisher: "VIBRATE",
        id: "66",
        title: "Twisted Logo Jogger Pants (Yellow)",
        price: 656
    },
    
    {
        img: "./img/products/dwyy_jogger_pants_black.png",
        publisher: "VIBRATE",
        id: "67",
        title: "D.W.Y.Y Jogger Pants (Black)",
        price: 515
    },
    
    {
        img: "./img/products/dwyy_jogger_pants_white.png",
        publisher: "VIBRATE",
        id: "68",
        title: "D.W.Y.Y Jogger Pants (White)",
        price: 515
    },
    
    {
        img: "./img/products/string_point_pants_white.png",
        publisher: "VIBRATE",
        id: "69",
        title: "String Point Pants (White)",
        price: 336
    },
    
    {
        img: "./img/products/logo_webbing_tape_jogger_pants_black.png",
        publisher: "VIBRATE",
        id: "70",
        title: "Logo Webbing Tape Jogger Pants (Black)",
        price: 347
    },
    
    {
        img: "./img/products/star_arrange_baggy_pants_black.png",
        publisher: "VIBRATE",
        id: "71",
        title: "Star Arrange Baggy Pants (Black)",
        price: 336
    },
    
    {
        img: "./img/products/side_big_logo_track_pants_black.png",
        publisher: "VIBRATE",
        id: "72",
        title: "Side Big Logo Track Pants (Black)",
        price: 432
    },
    
    {
        img: "./img/products/logo_strap_jogger_pants_navy.png",
        publisher: "VIBRATE",
        id: "73",
        title: "Logo Strap Jogger Pants (Navy)",
        price: 347
    },
    
    {
        img: "./img/products/logo_strap_jogger_pants_red.png",
        publisher: "VIBRATE",
        id: "74",
        title: "Logo Strap Jogger Pants (Red)",
        price: 347
    },
    
    {
        img: "./img/products/side_logo_jersey_pants_black.png",
        publisher: "VIBRATE",
        id: "75",
        title: "Side Logo Jersey Pants (Black)",
        price: 443
    },
    
    {
        img: "./img/products/side_logo_jersey_pants_white.png",
        publisher: "VIBRATE",
        id: "76",
        title: "Side Logo Jersey Pants (White)",
        price: 443
    },
    
    {
        img: "./img/products/palm_angels_logo_cap_black.png",
        publisher: "PALM ANGELS",
        id: "77",
        title: "Palm Angels Logo Cap (Black)",
        price: 520
    },
    
    {
        img: "./img/products/palm_angels_logo_cap_orange.png",
        publisher: "PALM ANGELS",
        id: "78",
        title: "Palm Angels Logo Cap (Orange)",
        price: 520
    },
    
    {
        img: "./img/products/palm_angels_logo_cap_pink.png",
        publisher: "PALM ANGELS",
        id: "79",
        title: "Palm Angels Logo Cap (Pink)",
        price: 520
    },
    
    {
        img: "./img/products/palm_angels_logo_cap_yellow.png",
        publisher: "PALM ANGELS",
        id: "80",
        title: "Palm Angels Logo Cap (Yellow)",
        price: 520
    },
    
    {
        img: "./img/products/v_great_ball_cap_white.png",
        publisher: "VIBRATE",
        id: "81",
        title: "V Great Ball Cap (White)",
        price: 344
    },
    
    {
        img: "./img/products/v_great_ball_cap_red.png",
        publisher: "VIBRATE",
        id: "82",
        title: "V Great Ball Cap (Red)",
        price: 344
    },
    
    {
        img: "./img/products/love_waffen_ball_cap_black.png",
        publisher: "VIBRATE",
        id: "83",
        title: "Love Waffen Ball Cap (Black)",
        price: 276
    },
    
    {
        img: "./img/products/love_waffen_ball_cap_white.png",
        publisher: "VIBRATE",
        id: "84",
        title: "Love Waffen Ball Cap (White)",
        price: 276
    },
    
    {
        img: "./img/products/s_signature_camo_ball_cap_navy.png",
        publisher: "VIBRATE",
        id: "85",
        title: "S Signature Camo Ball Cap (Navy)",
        price: 333
    },
    
    {
        img: "./img/products/s_signature_camo_ball_cap_grey.png",
        publisher: "VIBRATE",
        id: "86",
        title: "S Signature Camo Ball Cap (Grey)",
        price: 333
    },
    
    {
        img: "./img/products/s_signature_camo_ball_cap_khaki.png",
        publisher: "VIBRATE",
        id: "87",
        title: "S Signature Camo Ball Cap (Khaki)",
        price: 333
    },
    
    {
        img: "./img/products/s_signature_camo_ball_cap_charcoal.png",
        publisher: "VIBRATE",
        id: "88",
        title: "S Signature Camo Ball Cap (Charcoal)",
        price: 333
    },
    
    {
        img: "./img/products/ba_alive_logo_cap_black.png",
        publisher: "BURIEDALIVE",
        id: "89",
        title: "BA Alive Logo Cap (Black)",
        price: 154
    },
    
    {
        img: "./img/products/ba_alive_logo_cap_blue.png",
        publisher: "BURIEDALIVE",
        id: "90",
        title: "BA Alive Logo Cap (Blue)",
        price: 154
    },
    
    {
        img: "./img/products/ba_alive_logo_cap_red.png",
        publisher: "BURIEDALIVE",
        id: "91",
        title: "BA Alive Logo Cap (Red)",
        price: 154
    },
    
    {
        img: "./img/products/ba_circle_logo_cap_black.png",
        publisher: "BURIEDALIVE",
        id: "92",
        title: "BA Circle Logo Cap (Black)",
        price: 154
    },
    
    {
        img: "./img/products/ba_circle_logo_cap_blue.png",
        publisher: "BURIEDALIVE",
        id: "93",
        title: "BA Circle Logo Cap (Blue)",
        price: 154
    },
    
    {
        img: "./img/products/ba_circle_logo_cap_white.png",
        publisher: "BURIEDALIVE",
        id: "94",
        title: "BA Circle Logo Cap (White)",
        price: 154
    },
    
    {
        img: "./img/products/ba_x_op_vol_2_cap_black.png",
        publisher: "BURIEDALIVE",
        id: "95",
        title: "BA X OP Vol.2 Cap (Black)",
        price: 167
    },
    
    {
        img: "./img/products/ba_x_op_vol_2_cap_red.png",
        publisher: "BURIEDALIVE",
        id: "96",
        title: "BA X OP Vol.2 Cap (Red)",
        price: 167
    },
    
    {
        img: "./img/products/ba_x_op_vol_2_cap_lime.png",
        publisher: "BURIEDALIVE",
        id: "97",
        title: "BA X OP Vol.2 Cap (Lime)",
        price: 167
    },
    
    {
        img: "./img/products/ba_z_&_h_cap_white.png",
        publisher: "BURIEDALIVE",
        id: "98",
        title: "BA Z & H Cap (White)",
        price: 162
    },
    
    {
        img: "./img/products/ba_z_&_h_cap_black.png",
        publisher: "BURIEDALIVEd",
        id: "99",
        title: "BA Z & H Cap (Black)",
        price: 162
    },
    
    {
        img: "./img/products/logo_ball_cap_pink.png",
        publisher: "JEUNESSE",
        id: "100",
        title: "Logo Ball Cap (Pink)",
        price: 162
    },
    
    {
        img: "./img/products/logo_ball_cap_white.png",
        publisher: "JEUNESSE",
        id: "101",
        title: "Logo Ball Cap (White)",
        price: 162
    },
    
    {
        img: "./img/products/logo_ball_cap_black.png",
        publisher: "JEUNESSE",
        id: "102",
        title: "Logo Ball Cap (Black)",
        price: 162
    },
    
    {
        img: "./img/products/logo_ball_cap_green.png",
        publisher: "JEUNESSE",
        id: "103",
        title: "Logo Ball Cap (Green)",
        price: 162
    },
    
    {
        img: "./img/products/logo_ball_cap_navy.png",
        publisher: "JEUNESSE",
        id: "104",
        title: "Logo Ball Cap (Navy)",
        price: 162
    },    
];
