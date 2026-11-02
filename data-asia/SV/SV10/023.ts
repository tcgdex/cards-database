import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "パールル",
		'zh-tw': "珍珠貝",
		'zh-cn': "珍珠貝",
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "パールルの 真珠は とても 貴重。 シェルダーの 真珠の １０倍以上 価値が あるとも。",
		'zh-tw': "珍珠貝的珍珠非常貴重， 據說價值是大舌貝 所產珍珠的１０倍以上。",
		'zh-cn': "珍珠貝的珍珠非常貴重， 據說價值是大舌貝 所產珍珠的１０倍以上。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "シェルプレス",
				'zh-tw': "硬殼壓制",
				'zh-cn': "硬殼壓制",
			},
			damage: 10,
			cost: ["Water"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-10」される。",
				'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-10」點。",
				'zh-cn': "在下個對手的回合，這隻寶可夢受到招式的傷害「-10」點。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821854,
				tcgplayer: 628664,
			},
		},
	],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [366],
};

export default card;
