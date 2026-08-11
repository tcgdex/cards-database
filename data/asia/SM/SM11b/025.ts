import { Card } from "models/database/card";
import Set from "../SM11b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ラルトス",
	},

	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'ja-jp': "赤いツノで 人や ポケモンの 温かな 気持ちを キャッチすると 全身が ほのかに 熱くなる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "テレポート" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "このポケモンをベンチポケモンと入れ替える。",
			},
		},
		{
			name: { ja: "ぶつかる" },
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 555182,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [280],
};

export default card;
