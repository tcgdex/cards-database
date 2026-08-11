import { Card } from "models/database/card";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "オーダイル",
	},

	illustrator: "Acorviart",
	category: "Pokemon",
	hp: 180,
	types: ["Water"],

	description: {
		'ja-jp': "大きく 力強い あごで 噛みつくと そのまま 首を振って 相手を ずたずたに 引きちぎる。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ディープダイビング" },
			damage: 140,
			cost: ["Water", "Water", "Water", "Colorless"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 810561,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "アリゲイツ",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Promo",
	dexId: [160],
};

export default card;
