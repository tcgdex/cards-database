import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ガーディ",
		'zh-tw': "卡蒂狗",
		'zh-cn': "卡蒂狗",
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "自分より 強くて 大きな 相手にも 恐れずに 立ち向かう 勇敢で 頼もしい 性格。",
		'zh-tw': "能毫不畏懼地去對抗 比自己更強更大的對手。 性格非常勇敢可靠。",
		'zh-cn': "能毫不畏懼地去對抗 比自己更強更大的對手。 性格非常勇敢可靠。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ひだね",
				'zh-tw': "火種",
				'zh-cn': "火種",
			},
			damage: 10,
			cost: ["Fire"],
		},
		{
			name: {
				ja: "ツメをたてる",
				'zh-tw': "豎爪",
				'zh-cn': "豎爪",
			},
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821844,
				tcgplayer: 628654,
			},
		},
	],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [58],
};

export default card;
