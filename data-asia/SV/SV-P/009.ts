import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "モトトカゲex",
		'zh-tw': "超能豔鴕",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Colorless"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "パワーラン",
				'zh-tw': "極光增輝",
			},
			damage: 30,
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札から基本エネルギーを1枚選び、このポケモンにつける。そして山札を切る。",
				'zh-tw': "將這隻寶可夢恢復「30」HP。",
			},
		},
		{
			name: {
				ja: "フルスロットル",
				'zh-tw': "超念力",
			},
			damage: 180,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 691009,
				tcgplayer: 587766,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [967],

	suffix: "EX",
};

export default card;
