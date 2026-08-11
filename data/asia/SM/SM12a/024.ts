import { Card } from "models/database/card";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ニャヒート",
	},

	illustrator: "tetsuya koizumi",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		'ja-jp': "なつくと トレーナーにも 甘えるが 力は 強く ツメも 鋭い。 全身 傷だらけに されるぞ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ほのおのキバ" },
			damage: 20,
			cost: ["Fire"],
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
				cardmarket: 543511,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ニャビー",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "None",
	dexId: [726],
};

export default card;
