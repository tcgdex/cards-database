import { Card } from "models/database/card";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アーボ",
	},

	illustrator: "DemizuPosuka",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'ja-jp': "育つほどに どんどん 長くなる。 そして 夜中は 木の枝に グルグルと 絡まって 休む。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "どくばり" },
			damage: 10,
			cost: ["Colorless"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンをどくにする。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560195,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [23],
};

export default card;
