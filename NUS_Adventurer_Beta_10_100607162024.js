import { create_rectangle, query_position, update_position, 
    update_loop, build_game, input_key_down, create_sprite, update_scale, 
    set_scale, create_text, update_color, pointer_over_gameobject, 
    input_left_mouse_down, gameobjects_overlap, set_dimensions,
    get_game_time, update_text
} from "arcade_2d";
import { make_sound, play, consecutively } from "sound";



// useful constants
const faraway = -999999;
const length = 1950;
const width = 1600;
const total_num_of_coins = 6; // change the number of the coins if needed
let playerA_activation = false;
let playerB_activation = false;
let explorer_activation = false;

let num_of_coins_A = 0;
let num_of_life_A = 3;
let num_of_coins_B = 0;
let num_of_life_B = 3;
let Far = [faraway, faraway];
let defaultA = [100, 1500];
let defaultB = [225, 1500];
const green_bg = update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Green.jpg"), [20, 20]);






// ----------Constructing upper road------------
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






// ----------Constructing School Buildings------
const Central_Library = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/CentalLibrary.png"), [0.15, 0.15]), [775, 800]);
const University_Sports_Center = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/USC_Updated1.png"), [0.25, 0.25]), [310, 265]);
const COM4 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/COM4_Updated.png"), [0.3, 0.3]), [1240, 960]);
const Museum = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/NUS_Museum.png"), [0.3, 0.3]), [340, 580]);
const NUH = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/NUH_Updated.png"), [0.4, 0.25]), [1800, 255]);
const KentRidgeMRT = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/KentRidgeMRT_Updated.png"), [0.35, 0.35]), [1200, 295]);
const Playground = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Playground.png"), [0.6, 0.8]), [1750, 1475]);
const University_Cultural_Center = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/UCC_Updated1.png"), [0.45, 0.3]), [975, 1475]);
const UTown = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/UTown_Updated.png"), [0.45, 0.45]), [1750, 800]);

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




// const test_text = update_color(create_text("This is a test case"), [0, 0, 225, 225]);

// ----------Initializing all coins--------------
const coin_array = [];
for(let i = 0; i < total_num_of_coins; i = i + 1){
    coin_array[array_length(coin_array)] = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Coins_test.png"), [0.05, 0.05]), [math_random() * 1550, math_random() * 1000]);
}


// const the_orange_man = update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/nus_stu.png"), [0.2, 0.2]);
const nus_lion = update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/NusMascOri.PNG"), [0.35, 0.35]);
const merlion = update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Merlion_Updated.png"), [0.25, 0.25]);
// const the_Helicopter = update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/SpaceInvader.PNG"), [1, 1]);

const playerA = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/nus_stu.png"), [0.2, 0.2]), [100, 1500]); // 400, 1500
const playerB = update_position(nus_lion, [225, 1500]); // 600, 1500
const explorer = update_position(merlion, [350, 1500]); // 1000, 1500
const shuttle_bus1 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/NUS_BUS(Final%20one).png"), [0.125, 0.125]), [0, 420]);
// const test_case = update_position(test_text, [200, 900]);



const movement_dist = 15;

const test = update_scale(update_position(create_text("Hello World"), [faraway, faraway]), [5, 5]);

// ----------Initializing top elements----------
const time = update_position(update_scale(create_text("Time: 0"), [2, 2]), [100, 30]);
const score_A = update_position(update_scale(create_text("Player A: 0"), [2, 2]), [length - 100, 30]);
const score_B = update_position(update_scale(create_text("Player B: 0"), [2, 2]), [length - 100, 70]);

const hearts_A = update_position(update_scale(create_text("A-Heart(s): "), [2, 2]), [length/2 - 200, 30]);
const hearts_B = update_position(update_scale(create_text("B-Heart(s): "), [2, 2]), [length/2 + 200, 30]);

// const Discovery_Button = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Discover_Button_Updated.png"), [0.5, 0.5]), [200, 1500]);
// const Game_Button = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/Game_Button.png"), [0.5, 0.5]), [200, 1400]);

// ----------Hearts------------------------------------
const heart_A1 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/heart.png"), [0.05, 0.05]), [length / 2 - 75, 30]);
const heart_A2 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/heart.png"), [0.05, 0.05]), [length / 2 - 25, 30]);
const heart_A3 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/heart.png"), [0.05, 0.05]), [length / 2 + 25, 30]);
const A_array_of_hearts = [heart_A1, heart_A2, heart_A3];

const heart_B1 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/heart.png"), [0.05, 0.05]), [length / 2 + 325, 30]);
const heart_B2 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/heart.png"), [0.05, 0.05]), [length / 2 + 375, 30]);
const heart_B3 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/heart.png"), [0.05, 0.05]), [length / 2 + 425, 30]);
const B_array_of_hearts = [heart_B1, heart_B2, heart_B3];


const info_USC = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/info_USC.png"), [1.25, 1.25]), [length / 2, width / 2]);
const info_UCC = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/UCC_info.png"), [1.4, 1.4]), [length / 2, width / 2]);
const info_UTown = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/info_Utown.png"), [1.4, 1.4]), [length / 2, width / 2]);
const info_Central_Library = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/info_Central_Library.png"), [1.4, 1.4]), [length / 2, width / 2]);
const info_Museum = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/info_Museum.png"), [1.4, 1.4]), [length / 2, width / 2]);
const info_NUH = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/info_NUH.png"), [1.3, 1.3]), [length / 2, width / 2]);
const info_COM4 = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/info_COM4.png"), [1.4, 1.4]), [length / 2, width / 2]);
const info_KentRidgeMRT = update_position(update_scale(create_sprite("https://raw.githubusercontent.com/VihaanDU/NUS_Project/main/info_KentRidgeMRT.png"), [1.4, 1.4]), [length / 2, width / 2]);

// ----------Building-Info Pairs-----------------------
const p_USC = pair(University_Sports_Center, info_USC);
const p_UCC = pair(University_Cultural_Center, info_UCC);
const p_UTown = pair(UTown, info_UTown);
const p_Central_Library = pair(Central_Library, info_Central_Library);
const p_Museum = pair(Museum, info_Museum);
const p_NUH = pair(NUH, info_NUH);
const p_COM4 = pair(COM4, info_COM4);
const p_KentRidgeMRT = pair(KentRidgeMRT, info_KentRidgeMRT);


// ----------FUNCTIONS & ABSTRACTIONS------------------
const check_A_activation = x => playerA_activation;
const check_B_activation = x => playerB_activation;
// ----------Play Coin Sound---------------------------
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
// ----------Pop up Sound------------------------------
function pop_up_sound(){
    const touch_sound = make_sound(t => (math_sin(2 * math_PI * 240 * t) * math_exp(-5 * t) 
            + 0.5 * math_sin(2 * math_PI * 580 * t)) * math_exp(- 5 * t), 
                                    0.9);
    play(touch_sound);
}
// ----------Move--------------------------------------
function add_vectors(to, from) {
    to[0] = to[0] + from[0];
    to[1] = to[1] + from[1];
}
// ----------Check if reaches boundaries or not-------
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
// ----------Pop up information------------------------
function show_info(p){
    if(gameobjects_overlap(head(p), explorer)){
        update_position(tail(p), [length / 2, width / 2]);
        pop_up_sound();
    } else {
        update_position(tail(p), Far);
    }
}
// ----------Collect coins-----------------------------
function A_collect_coins(){
    for(let i = 0; i < total_num_of_coins; i = i + 1){
        if(gameobjects_overlap(coin_array[i], playerA) && check_A_activation){
            num_of_coins_A = num_of_coins_A + 1;
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
        if(gameobjects_overlap(coin_array[i], nus_lion) && check_B_activation){
            num_of_coins_B = num_of_coins_B + 1;
            coin_sound();
            update_text(score_B, "Player B: " + stringify(num_of_coins_B));
            update_position(coin_array[i], Far);
        } else {
            continue;
        }
    }
}
// ----------Check collision---------------------------
function check_A_collison(){
    if(gameobjects_overlap(shuttle_bus1, playerA) && num_of_life_A > 0){
        update_position(playerA, defaultA);
        update_position(A_array_of_hearts[num_of_life_A - 1], Far);
        num_of_life_A = num_of_life_A - 1;
    } else {
        return 0;
    }
}





// ----------Check which mode is on--------------------
// function check_discovery_mode_is_on() {return discovery_on;}
// function check_game_mode_is_on() {return game_on;}








// **********GAME CONTROLS*****************************
update_loop(game_state => {
    const new_position1 = boundary_check((query_position(playerA)));
    // const new_position2 = query_position(playerB);
    const new_position3 = boundary_check((query_position(playerB)));
    const new_position4 = boundary_check((query_position(explorer)));
    const new_position_test = query_position(test);
// ----------Clicking Buttons--------------------------
    // if(pointer_over_gameobject(Discovery_Button) && input_left_mouse_down()){
    //     discovery_on = true;
    //     game_on = false;
    // }
    // if(pointer_over_gameobject(Game_Button) && input_left_mouse_down()){
    //     game_on = true;
    //     discovery_on = false;
    // }
    
// ----------players activation------------------------
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
// ----------------------------------------------------
// ----------Control the orange man--------------------
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
// ----------------------------------------------------
// ----------Control the lion--------------------------
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
// ----------------------------------------------------
// ----------Control the merlion--------------------------
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
// ----------------------------------------------------





// ----------pop/un-pop information--------------------    
    show_info(p_USC);
    show_info(p_UCC);
    show_info(p_UTown);
    show_info(p_Central_Library);
    show_info(p_Museum);
    show_info(p_NUH);
    show_info(p_COM4);
    show_info(p_KentRidgeMRT);
// ----------------------------------------------------


// ---------players collecting coins in game mode------
    A_collect_coins();
    B_collect_coins();
// ---------collision with the bus--------------------
    if(gameobjects_overlap(shuttle_bus1, playerA)){
        update_position(playerA, [1750, 1475]);
    }
// ---------players activation------------------------
    if (pointer_over_gameobject(playerB) && input_left_mouse_down()) {
        playerB_activation = true;
    }
    if (pointer_over_gameobject(playerA) && input_left_mouse_down()) {
        playerA_activation = true;
    }
    if (pointer_over_gameobject(explorer) && input_left_mouse_down()) {
        explorer_activation = true;
    }
// ----------------------------------------------------

//----------Update GameObjects within update_loop(...)-
    update_text(time, "Time: " + stringify(math_floor(get_game_time() / 1000)) + "s");
    update_position(playerA, new_position1);
    update_position(shuttle_bus1, boundary_check([1950 - get_game_time()/1, 415]));
    update_position(playerB, new_position3);
    update_position(explorer, new_position4);
// ----------------------------------------------------
});


// set the width as 500 and height as 400
set_dimensions([1000, 800]);
set_scale(0.5);

build_game();