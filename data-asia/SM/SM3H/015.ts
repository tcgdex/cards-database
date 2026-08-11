import { Card } from "../../../interfaces";
import Set from "../SM3H";

const card: Card = {
	set: Set,
	name: {
		ja: "クイタラン",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	description: {
		ja: "高温で 燃える 炎の 舌で アイアントの 鋼の 体を 溶かして 中身を いただくのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かぎわける" },
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを2回投げ、オモテの数ぶん、自分のトラッシュにある好きなカードを、相手に見せてから、手札に加える。",
			},
		},
		{
			name: { ja: "やきこがす" },
			damage: 60,
			cost: ["Fire", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをやけどにする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561079,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [631],
};

export default card;
