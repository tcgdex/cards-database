import { Card } from "models/database/card";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マルマイン",
	},

	illustrator: "",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ボムボムチェイン" },
			damage: "20+",
			cost: ["Lightning"],
			effect: {
				'ja-jp': "ダメージを与える前に、自分の場のポケモンについている「ポケモンのどうぐ」を好きなだけトラッシュし、その枚数×40ダメージ追加。",
			},
		},
		{
			name: { ja: "エレキボール" },
			damage: 70,
			cost: ["Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560992,
				tcgplayer: 569320,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ビリリダマ",
	},

	retreat: 1,
	regulationMark: "G",
	rarity: "Secret Rare",
	dexId: [101],
};

export default card;
