import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "パールル",
		'zh-tw': "珍珠貝",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "パールルの 真珠は とても 貴重。 シェルダーの 真珠の １０倍以上 価値が あるとも。",
		'zh-tw': "珍珠貝的珍珠非常貴重，據說價值是大舌貝所產珍珠的１０倍以上。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "はじけるあわ",
				'zh-tw': "泡沫濺射",
			},
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575578,
				tcgplayer: 569524,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Common",
	dexId: [366],
};

export default card;
