import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "ガーディ",
		'zh-tw': "卡蒂狗",
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		ja: "自分より 強くて 大きな 相手にも 恐れずに 立ち向かう 勇敢で 頼もしい 性格。",
		'zh-tw': "能毫不畏懼地去對抗比自己更強更大的對手。性格非常勇敢可靠。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ほのお",
				'zh-tw': "火焰",
			},
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: {
				ja: "ぶつかる",
				'zh-tw': "衝撞",
			},
			damage: 20,
			cost: ["Fire", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 673009,
				tcgplayer: 570775,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				tcgplayer: 570866,
			},
		},
	],

	retreat: 3,
	regulationMark: "F",
	rarity: "Common",
	dexId: [58],
};

export default card;
