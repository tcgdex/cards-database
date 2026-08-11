import { Card } from "models/database/card";
import Set from "../SM4S";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "バクーダ",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	description: {
		'ja-jp': "背中の コブの 火山は １０年ごとに 大噴火 するが 激しく 怒っても 噴火する。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "れんぞくずつき" },
			damage: "80×",
			cost: ["Fire", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "ウラが出るまでコインを投げ、オモテの数x80ダメージ。",
			},
		},
		{
			name: { ja: "やきこがす" },
			damage: 120,
			cost: ["Fire", "Fire", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンをやけどにする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560320,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ドンメル",
	},

	retreat: 4,
	rarity: "Uncommon",
	dexId: [323],
};

export default card;
