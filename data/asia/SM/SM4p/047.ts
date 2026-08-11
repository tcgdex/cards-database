import { Card } from "models/database/card";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "コスモウム",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'ja-jp': "硬いカラの 中で 黒いコアに なにかが 集まり 続けている。 別世界の ポケモンと いわれる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "テレポート" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "このポケモンをベンチポケモンと入れ替える。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560080,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "コスモッグ",
	},

	retreat: 3,
	rarity: "None",
	dexId: [790],
};

export default card;
