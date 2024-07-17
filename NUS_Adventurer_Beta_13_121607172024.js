import { create_rectangle, query_position, update_position, 
    update_loop, build_game, input_key_down, create_sprite, update_scale, 
    set_scale, create_text, update_color, pointer_over_gameobject, 
    input_left_mouse_down, gameobjects_overlap, set_dimensions,
    get_game_time, update_text
} from "arcade_2d";

import { bell, play, silence_sound, consecutively, stop, cello, make_sound,
        violin} from "sound";



// useful constants & variables
const faraway = -999999;
const length = 1950;
const width = 1600;
const total_num_of_coins = 25; // change the number of the coins if needed
let playerA_activation = false;
let playerB_activation = false;
let explorer_activation = false;

let num_of_coins_collected = 0;
let num_of_coins_A = 0;
let num_of_life_A = 3;
let num_of_coins_B = 0;
let num_of_life_B = 3;

let Far = [faraway, faraway];
const defaultA = [100, 1500];
const defaultB = [225, 1500];
const revival_A = [1700, 1500];
const revival_B = [1800, 1500];

let UCC_played = false;
let USC_played = false;
let NUH_played = false;
let Central_Library_played = false;
let UTown_played = false;
let COM4_played = false;
let KentRidgeMRT_played = false;
let Museum_played = false;
let Bus_Stop_played = false;

let game_over = false;

const green_bg = update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Green.jpg"), [20, 20]);



// Constructing upper road
const upper_road0 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Road_Test.png"), [0.5, 0.5]), [-125, 450]);
const upper_road1 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Road_Test.png"), [0.5, 0.5]), [200, 450]);
const upper_road2_crossing = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Crossing.png"), [0.5, 0.5]), [525, 450]);
const upper_road3 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Road_Test.png"), [0.5, 0.5]), [850, 450]);
const upper_road4 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Road_Test.png"), [0.5, 0.5]), [1175, 450]);
const upper_road5 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Road_Test.png"), [0.5, 0.5]), [1500, 450]);
const upper_road6 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Road_Test.png"), [0.5, 0.5]), [1825, 450]);


const left_road_1 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Road_vertical.png"), [0.5, 0.5]), [493, 67]);
const left_road_2 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Road_vertical.png"), [0.5, 0.5]), [493, 830]);
const left_road_3 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Road_vertical.png"), [0.5, 0.5]), [493, 1210]);
const left_road_4 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Road_vertical.png"), [0.5, 0.5]), [493, 1590]);


const lower_road0 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Road_Test.png"), [0.5, 0.5]), [-125, 1300]);
const lower_road1 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Road_Test.png"), [0.5, 0.5]), [200, 1300]);
const lower_road2_crossing = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Crossing.png"), [0.5, 0.5]), [525, 1300]);
const lower_road3 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Road_Test.png"), [0.5, 0.5]), [850, 1300]);
const lower_road4 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Road_Test.png"), [0.5, 0.5]), [1175, 1300]);
const lower_road5 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Road_Test.png"), [0.5, 0.5]), [1500, 1300]);
const lower_road6 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Road_Test.png"), [0.5, 0.5]), [1825, 1300]);


const right_road_1 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/T_Crossing_Updated.png"), [0.5, 0.5]), [1432, 450]);
const right_road_2 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Road_vertical.png"), [0.5, 0.5]), [1400, 830]);
const right_road_3 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Crossing.png"), [0.5, 0.5]), [1432, 1300]);
const right_road_4 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Road_vertical.png"), [0.5, 0.5]), [1400, 1590]);
const right_road_5 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Road_vertical.png"), [0.5, 0.5]), [1400, 918]);



// Constructing School Buildings
const Central_Library = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/CentalLibrary.png"), [0.15, 0.15]), [775, 800]);
const University_Sports_Center = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/USC_Updated1.png"), [0.25, 0.25]), [310, 265]);
const COM4 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/COM4_Updated.png"), [0.3, 0.3]), [1240, 960]);
const Museum = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/NUS_Museum.png"), [0.3, 0.3]), [340, 580]);
const NUH = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/NUH_Updated.png"), [0.4, 0.25]), [1800, 255]);
const KentRidgeMRT = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/KentRidgeMRT_Updated.png"), [0.35, 0.35]), [1200, 295]);
const Playground = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Playground.png"), [0.6, 0.8]), [1750, 1475]);
const University_Cultural_Center = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/UCC_Updated1.png"), [0.45, 0.3]), [975, 1475]);
const UTown = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/UTown_Updated.png"), [0.45, 0.45]), [1750, 800]);
const Bus_Stop = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/BUS%20Stop_Updated.PNG"), [0.25, 0.25]), [800, 260]);

const Bush_1 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Bush.PNG"), [0.35, 0.35]), [705, 880]);
const Bush_2 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Bush.PNG"), [0.35, 0.35]), [835, 880]);

const lower_Bush_1 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Bush.PNG"), [0.35, 0.35]), [670, 1160]);
const lower_Bush_2 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Bush.PNG"), [0.35, 0.35]), [780, 1160]);
const lower_Bush_3 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Bush.PNG"), [0.35, 0.35]), [890, 1160]);
const lower_Bush_4 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Bush.PNG"), [0.35, 0.35]), [1000, 1160]);
const lower_Bush_5 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Bush.PNG"), [0.35, 0.35]), [1110, 1160]);
const lower_Bush_6 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Bush.PNG"), [0.35, 0.35]), [1220, 1160]);
const lower_Bush_7 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Bush.PNG"), [0.35, 0.35]), [1310, 1160]);

const lower_Bush_8 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Bush.PNG"), [0.35, 0.35]), [1580, 1160]);
const lower_Bush_9 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Bush.PNG"), [0.35, 0.35]), [1690, 1160]);
const lower_Bush_10 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Bush.PNG"), [0.35, 0.35]), [1800, 1160]);
const lower_Bush_11 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Bush.PNG"), [0.35, 0.35]), [1910, 1160]);

const lower_Bush_12 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Bush.PNG"), [0.35, 0.35]), [80, 1160]);
const lower_Bush_13 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Bush.PNG"), [0.35, 0.35]), [190, 1160]);
const lower_Bush_14 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Bush.PNG"), [0.35, 0.35]), [300, 1160]);
const lower_Bush_15 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Bush.PNG"), [0.35, 0.35]), [400, 1160]);

const upper_Bush_1 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Bush.PNG"), [0.3, 0.3]), [80, 315]);
const upper_Bush_2 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Bush.PNG"), [0.3, 0.3]), [200, 315]);
const upper_Tree_1 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Tree.PNG"), [0.4, 0.4]), [425, 282]);
const mrt_bush1 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Bush2.PNG"), [0.3, 0.3]), [1390, 320]);
const nuh_bush1 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Bush1.PNG"), [0.3, 0.3]), [1650, 316]);
const nuh_bush2 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Bush1.PNG"), [0.3, 0.3]), [1960, 316]);

const ucc_bush1 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Bush1.PNG"), [0.3, 0.3]), [750, 1550]);
const ucc_bush2 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Bush2.PNG"), [0.3, 0.3]), [820, 1555]);
const ucc_bush3 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Bush1.PNG"), [0.3, 0.3]), [890, 1550]);
const ucc_bush4 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Bush2.PNG"), [0.3, 0.3]), [1170, 1555]);

const com4_bush1 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Bush3.PNG"), [0.2, 0.2]), [1100, 1050]);



// Initializing all coins
const coin_array = [];
for(let i = 0; i < total_num_of_coins; i = i + 1){
    coin_array[array_length(coin_array)] = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Coins_test.png"), [0.05, 0.05]), [math_random() * 1550, math_random() * 1000]);
}


const Help_Button = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Help%201.0.PNG"), [1, 1]), [160, 1530]);
const playerA = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/nus_stu.png"), [0.2, 0.2]), defaultA); // 400, 1500
const playerB = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/NusMascOri_Updated.PNG"), [0.35, 0.35]), defaultB); // 600, 1500
const explorer = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Merlion_Updated.png"), [0.25, 0.25]), [350, 1500]); // 1000, 1500
const shuttle_bus1 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/NUS_BUS(Final%20one).png"), [0.125, 0.125]), [0, 420]);
const shuttle_bus2 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/NUS_BUS(Final%20one).png"), [0.125, 0.125]), [0, 1300]);
const the_Helicopter = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Welcome%20to%20NUS.png"), [0.4, 0.4]), [0, width / 2]);

const movement_dist = 15;

const test = update_scale(update_position(create_text("Hello World"), [faraway, faraway]), [5, 5]);

// Initializing top elements
const time = update_position(update_scale(create_text("Time: 0"), [2, 2]), [100, 30]);
const score_A = update_position(update_scale(create_text("Player A: 0"), [2, 2]), [length - 100, 30]);
const score_B = update_position(update_scale(create_text("Player B: 0"), [2, 2]), [length - 100, 70]);

const hearts_A = update_position(update_scale(create_text("A-Heart(s): "), [2, 2]), [length/2 - 200, 30]);
const hearts_B = update_position(update_scale(create_text("B-Heart(s): "), [2, 2]), [length/2 + 200, 30]);

// Hearts
const heart_A1 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/heart.png"), [0.05, 0.05]), [length / 2 - 75, 30]);
const heart_A2 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/heart.png"), [0.05, 0.05]), [length / 2 - 25, 30]);
const heart_A3 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/heart.png"), [0.05, 0.05]), [length / 2 + 25, 30]);
const A_array_of_hearts = [heart_A1, heart_A2, heart_A3];

const heart_B1 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/heart.png"), [0.05, 0.05]), [length / 2 + 325, 30]);
const heart_B2 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/heart.png"), [0.05, 0.05]), [length / 2 + 375, 30]);
const heart_B3 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/heart.png"), [0.05, 0.05]), [length / 2 + 425, 30]);
const B_array_of_hearts = [heart_B1, heart_B2, heart_B3];

// All the information panels
const white_bg = update_position(update_scale(create_text("H"), [2100, 2100]), Far);// [length / 2 + 1000000, width / 2 + 1000000]
const info_USC = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/info_USC.png"), [1.25, 1.25]), Far);
const info_UCC = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/UCC_info.png"), [1.4, 1.4]), Far);
const info_UTown = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/info_Utown.png"), [1.4, 1.4]), Far);
const info_Central_Library = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/info_Central_Library.png"), [1.4, 1.4]), Far);
const info_Museum = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/info_Museum.png"), [1.4, 1.4]), Far);
const info_NUH = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/info_NUH.png"), [1.3, 1.3]), Far);
const info_COM4 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/info_COM4.png"), [1.4, 1.4]), Far);
const info_KentRidgeMRT = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/info_KentRidgeMRT.png"), [1.4, 1.4]), Far);
const info_instructions = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/instruction.png"), [1.2, 1.2]), Far);
const info_bus_stop = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/info_bus_stop.png"), [1.2, 1.2]), Far);
const info_A_win = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/GAME%20OVER%20A%20win_updated.png"), [1.2, 1.2]), Far);
const info_B_win = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/GAME%20OVER%20B%20win_updated.png"), [1.2, 1.2]), Far);

const f_score_A = update_position(update_scale(create_text("GAME OVER!"), [3.5, 3.5]), Far);
const f_score_B = update_position(update_scale(create_text("GAME OVER!"), [3.5, 3.5]), Far);

// Building-Info Pairs
const p_USC = list(University_Sports_Center, info_USC, USC_played);
const p_UCC = list(University_Cultural_Center, info_UCC, UCC_played);
const p_UTown = list(UTown, info_UTown, UTown_played);
const p_Central_Library = list(Central_Library, info_Central_Library, Central_Library_played);
const p_Museum = list(Museum, info_Museum, Museum_played);
const p_NUH = list(NUH, info_NUH, NUH_played);
const p_COM4 = list(COM4, info_COM4, COM4_played);
const p_KentRidgeMRT = list(KentRidgeMRT, info_KentRidgeMRT, KentRidgeMRT_played);
const p_Bus_Stop = list(Bus_Stop, info_bus_stop, Bus_Stop_played);

// FUNCTIONS & ABSTRACTIONS
const check_A_activation = x => playerA_activation;
const check_B_activation = x => playerB_activation;

// Play winning Sound
function winner_sound(){
    const T = 0.1;
    const T1 = 0.2;
    const T2 = 0.3;
    
    const B4 = violin(71, T); const F4 = violin(65, T); const D4 = violin(62, T);
    const E4_ = violin(64, T1); const C4= violin(60, T); const E4 = violin(64, T);
    const G4_ = violin(67, T2); const G4 = violin(67, T); const A4 = violin(69, T); 
    const C5_ = violin(72, T1); const D5_ = violin(74, T1); const E5_ = violin(76, T1);
    const G5_ = violin(80, T1); 
    
    const winner_sound = list(C4, E4, G4, E4, G4_);
    
    play(consecutively(winner_sound));
}

// Play Coin Sound
function coin_sound(){
    const main_ding_sound_wave = t => (math_sin(2 * math_PI * 1046.50 * t) 
            + 0.5 * math_sin(2 * math_PI * 2093.00 * t)) * math_exp(-5 * t);
    const main_ding_sound = make_sound(main_ding_sound_wave, 0.1);
    const high_pitch_end_wave = t =>  (math_sin(2 * math_PI * 1440 * t) * math_exp(-5 * t) 
            + 0.5 * math_sin(2 * math_PI * 2880 * t)) * math_exp(-5 * t); 
    const high_pitch_end = make_sound(high_pitch_end_wave, 0.2);
    const coin_sound = consecutively(list(main_ding_sound, high_pitch_end));
    play(coin_sound);
}

// Pop up Sound
function pop_up_sound(){
    const touch_sound = make_sound(t => (math_sin(2 * math_PI * 240 * t) * math_exp(-5 * t) 
            + 0.5 * math_sin(2 * math_PI * 580 * t)) * math_exp(- 5 * t), 
                                    0.9);
    play(touch_sound);
}

// Move
function add_vectors(to, from) {
    to[0] = to[0] + from[0];
    to[1] = to[1] + from[1];
}

// Check if reaches boundaries or not
function boundary_check(v){
    let new_coordinate = v;
    if(v === [faraway, faraway]){return v;}
    else {
        if(v[0] <= 0){
            new_coordinate[0] = length - math_abs(v[0]) % length;
        } else {
            new_coordinate[0] = v[0] % length;
        }
    
        if(v[1] <= 0){
            new_coordinate[1] = width - math_abs(v[1]) % width;
        } else {
            new_coordinate[1] = v[1] % width;
        }
        return new_coordinate;
    }
}

// Information pop-ups
function show_info(p){
    if(gameobjects_overlap(head(p), explorer)){
        if(!tail(tail(p))){
            update_position(head(tail(p)), [length / 2, width / 2]);
            update_position(white_bg, [length + 2200, width + 1100]);
            set_tail(tail(p), true);
            // display("test");
            pop_up_sound();
        } else {
            // display("2");
            update_position(head(tail(p)), [length / 2, width / 2]);
            update_position(white_bg, [length + 2200, width + 1100]);
        }
    } else {
        update_position(head(tail(p)), Far);
        update_position(white_bg, Far);
        set_tail(tail(p), false);
    }
}

// Collecting coins
function A_collect_coins(){
    for(let i = 0; i < total_num_of_coins; i = i + 1){
        if(gameobjects_overlap(coin_array[i], playerA) && check_A_activation){
            num_of_coins_A = num_of_coins_A + 1;
            num_of_coins_collected = num_of_coins_collected + 1;
            coin_sound();
            update_text(score_A, "Player A: " + stringify(num_of_coins_A));
            update_position(coin_array[i], Far);
        } else {
            continue;
        }
    }
}
function B_collect_coins(){
    for(let i = 0; i < total_num_of_coins; i = i + 1){
        if(gameobjects_overlap(coin_array[i], playerB) && check_B_activation){
            num_of_coins_B = num_of_coins_B + 1;
            num_of_coins_collected = num_of_coins_collected + 1;
            coin_sound();
            update_text(score_B, "Player B: " + stringify(num_of_coins_B));
            update_position(coin_array[i], Far);
        } else {
            continue;
        }
    }
}

// Check collision
function check_A_collison(){
    if(gameobjects_overlap(shuttle_bus1, playerA) && num_of_life_A > 0){
        update_position(playerA, revival_A);
        update_position(A_array_of_hearts[num_of_life_A - 1], Far);
        num_of_life_A = num_of_life_A - 1;
        if(num_of_life_A === 0){
            game_over = true;
        }
    } else {
        return 0;
    }
}

function check_B_collison(){
    if(gameobjects_overlap(shuttle_bus1, playerB) && num_of_life_B > 0){
        update_position(playerB, revival_B);
        update_position(B_array_of_hearts[num_of_life_B - 1], Far);
        num_of_life_B = num_of_life_B - 1;
        if(num_of_life_B === 0){
            game_over = true;
        }
    } else {
        return 0;
    }
}

// Print Winning
function A_win(){
    update_position(info_A_win, [length / 2, width / 2]);
    update_position(update_text(f_score_A, stringify(num_of_coins_A)), [length / 2 + 125, width / 2 + 222]);
    update_position(update_text(f_score_B, stringify(num_of_coins_B)), [length / 2 + 125, width / 2 + 282]);
}
function B_win(){
    update_position(info_B_win, [length / 2, width / 2]);
    update_position(update_text(f_score_A, stringify(num_of_coins_A)), [length / 2 + 125, width / 2 + 222]);
    update_position(update_text(f_score_B, stringify(num_of_coins_B)), [length / 2 + 125, width / 2 + 282]);
}
function tied(){
    
}
// ----------play background music---------------------
// function play_bgm() {
//     const t = 0.3;
//     const t1 = 0.6;
//     const rest = silence_sound(t);

//     // Create all sound objects once
//     const Eb5 = bell(75, t); const Bb5 = bell(82, t); const F_5_ = bell(77, t1);
//     const G_5 = bell(79, t); const Ab5 = bell(80, t); const F_5 = bell(77, t); 
//     const Bb4_ = bell(70, t1); const G_4_ = bell(67, t1); const Ab4 = bell(68, t);
//     const D_5_ = bell(74, t1); const Bb4 = bell(70, t); const C_5 = bell(72, t);
//     const E_5 = bell(76, t); const G_5_ = bell(79, t1); const Eb5_ = bell(75, t1);
//     const G_4 = bell(67, t);

//     // Define the melodyA sequence directly as a list of sound objects
//     const melodyA = list(
//         rest, Eb5, Bb5, F_5_, G_5, rest,
//         Ab5, G_5, F_5, Eb5, Bb4_, G_4_,
//         Ab4, G_5, D_5_, rest, Eb5,
//         Bb4, G_4, Ab4, Bb4, rest,
//         C_5, Bb5, D_5_, Eb5,
//         Bb4, F_5_, E_5, G_5_,
//         Ab5, G_5, Eb5, F_5, Eb5_
//     );

//     // Helper function to append lists
//     function append_lists(list1, list2) {
//         if (is_null(list1)) {
//             return list2;
//         } else {
//             return pair(head(list1), append_lists(tail(list1), list2));
//         }
//     }

//     // Initialize an empty list for the final melody
//     let finalMelody = null;

//     // Append melodyA twelve times using a loop
//     for (let i = 0; i < 12; i = i + 1) {
//         finalMelody = append_lists(finalMelody, melodyA);
//     }

//     // Play the concatenated melody
//     play(consecutively(finalMelody));
// }



// *****************************GAME CONTROLS*****************************
// play_bgm();
update_loop(game_state => {
    const new_position1 = boundary_check((query_position(playerA)));    
    const new_position3 = boundary_check((query_position(playerB)));
    const new_position4 = boundary_check((query_position(explorer)));
    
    
    
// players activation
    if (pointer_over_gameobject(playerB) && input_left_mouse_down()) {
        if(playerB_activation){
            playerB_activation = false;
        }
        else{
            playerB_activation = true;
        }
    }
    if (pointer_over_gameobject(playerA) && input_left_mouse_down()) {
        if(playerA_activation){
            playerA_activation = false;
        }
        else{
            playerA_activation = true;
        }
    }
    
    if (pointer_over_gameobject(explorer) && input_left_mouse_down()) {
        if(explorer_activation){
            explorer_activation = false;
        }
        else{
            explorer_activation = true;
        }
    }



// Control the orange man
    if (input_key_down("w") && playerA_activation) {
        add_vectors(new_position1, [0, -1 * movement_dist]);
    }
    if (input_key_down("a") && playerA_activation) {
        add_vectors(new_position1, [-1 * movement_dist, 0]);
    }
    if (input_key_down("s") && playerA_activation) {
        add_vectors(new_position1, [0, movement_dist]);
    }
    if (input_key_down("d") && playerA_activation) {
        add_vectors(new_position1, [movement_dist, 0]);
    }



// Control the lion
    if (input_key_down("i") && playerB_activation) {
        add_vectors(new_position3, [0, -1 * movement_dist]);
    }
    if (input_key_down("j") && playerB_activation) {
        add_vectors(new_position3, [-1 * movement_dist, 0]);
    }
    if (input_key_down("k") && playerB_activation) {
        add_vectors(new_position3, [0, movement_dist]);
    }
    if (input_key_down("l") && playerB_activation) {
        add_vectors(new_position3, [movement_dist, 0]);
    }



// Control the merlion
    if (input_key_down("ArrowUp") && explorer_activation) {
        add_vectors(new_position4, [0, -1 * movement_dist]);
    }
    if (input_key_down("ArrowLeft") && explorer_activation) {
        add_vectors(new_position4, [-1 * movement_dist, 0]);
    }
    if (input_key_down("ArrowDown") && explorer_activation) {
        add_vectors(new_position4, [0, movement_dist]);
    }
    if (input_key_down("ArrowRight") && explorer_activation) {
        add_vectors(new_position4, [movement_dist, 0]);
    }



// pop/un-pop information
    show_info(p_USC);
    show_info(p_UCC);
    show_info(p_UTown);
    show_info(p_Central_Library);
    show_info(p_Museum);
    show_info(p_NUH);
    show_info(p_COM4);
    show_info(p_KentRidgeMRT);
    show_info(p_Bus_Stop);
    if(gameobjects_overlap(Help_Button, playerA) || gameobjects_overlap(Help_Button, playerB) || gameobjects_overlap(Help_Button, explorer)){
        update_position(info_instructions, [length / 2, width / 2]);
    } else {
        update_position(info_instructions, Far);
    }



// players collecting coins in game mode
    A_collect_coins();
    B_collect_coins();
   
   
    
// players activation
    if (pointer_over_gameobject(playerB) && input_left_mouse_down()) {
        playerB_activation = true;
    }
    if (pointer_over_gameobject(playerA) && input_left_mouse_down()) {
        playerA_activation = true;
    }
    if (pointer_over_gameobject(explorer) && input_left_mouse_down()) {
        explorer_activation = true;
    }



// Update GameObjects within update_loop
    update_text(time, "Time: " + stringify(math_floor(get_game_time() / 1000)) + "s");
    update_position(playerA, new_position1);
    check_A_collison();// check collision
    update_position(shuttle_bus1, boundary_check([1950 - get_game_time()/1, 415]));
    update_position(shuttle_bus2, boundary_check([1950 - get_game_time()/2, 1300]));
    update_position(the_Helicopter, boundary_check([1950 - get_game_time()/4, width / 2]));
    
    update_position(playerB, new_position3);
    check_B_collison();// check collision
    update_position(explorer, new_position4);
    
    
    
// check game status
    if (game_over || num_of_coins_collected === total_num_of_coins) {
        winner_sound();
        if(num_of_life_A === 0 || num_of_life_B === 0){
            if(num_of_life_B === 0){
                A_win();
                return undefined;
            } else {
                B_win();
                return undefined;
            }
        } else if(num_of_coins_B < num_of_coins_A){
            A_win();
            return undefined;
        } else if(num_of_coins_B > num_of_coins_A){
            B_win();
            return undefined;
        } else {
            tied();
            return undefined;
        }
    }
});


// set the width as 500 and height as 400
set_dimensions([1000, 800]);
set_scale(0.5);

build_game();