import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "スピアーV",
		'zh-tw': "大針蜂V",
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 210,
	types: ["Grass"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ダブルニードル",
				'zh-tw': "雙針",
			},
			damage: "40×",
			cost: ["Grass"],
			effect: {
				ja: "コインを2回投げ、オモテの数×40ダメージ。",
				'zh-tw': "擲2次硬幣，造成正面出現的次數×40點傷害。",
			},
		},
		{
			name: {
				ja: "むれでさす",
				'zh-tw': "群起刺擊",
			},
			cost: ["Grass", "Grass", "Colorless"],
			effect: {
				ja: "相手のポケモン1匹に、自分の場の｢スピアーV｣の数×50ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "對手的1隻寶可夢，受到自己的場上「大針蜂【V】」的數量×50點傷害。[在備戰區不計算弱點・抵抗力。]",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 651060,
				tcgplayer: 569844,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Double rare",
	dexId: [15],
};

export default card;
