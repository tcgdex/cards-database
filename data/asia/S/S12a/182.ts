import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル フリーザー",
		'zh-tw': "伽勒爾 急凍鳥",
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "凍りついたかのように 体の 自由を 奪う ビームを 撃ちだす フリーザーの 名を もつ ポケモン。",
		'zh-tw': "擁有急凍鳥之名的寶可夢。射出的光束會讓對方的身體像結凍似地失去自由。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "れいこくチャージ",
				'zh-tw': "冷酷充能",
			},
			effect: {
				ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。自分の手札から[超]エネルギーを2枚まで選び、このポケモンにつける。",
				'zh-tw': "在自己的回合，當從手牌將這張卡放置於備戰區時，可使用1次。從自己的手牌選擇最多2張【超】能量卡，附於這隻寶可夢身上。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "サイコレーザー",
				'zh-tw': "精神鐳射",
			},
			cost: ["Psychic", "Psychic", "Colorless"],
			effect: {
				ja: "このポケモンについている[超]エネルギーをすべてトラッシュし、相手のポケモン1匹に、120ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "將這隻寶可夢身上附加的所有【超】能量丟棄，對手的1隻寶可夢受到120點傷害。[在備戰區不計算弱點・抵抗力。]",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687744,
				tcgplayer: 571720,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Illustration rare",
	dexId: [144],
};

export default card;
