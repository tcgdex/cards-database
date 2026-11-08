import { Card } from "models/database/card";
import Set from "../SM7a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "メタモン",
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 40,
	types: ["Colorless"],

	description: {
		'ja-jp': "驚きの 変身能力で どんな者とも 仲間に なれる。 メタモン同士は 仲が 悪い。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "なんでもしんか" },
			effect: {
				'ja-jp': "このポケモンは、自分の番に、1進化ポケモンを手札から出して、このポケモンに重ねて進化できる。（最初の自分の番と、このポケモンを場に出した番はのぞく。）",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558931,
			},
		},
	],

	retreat: 1,
	rarity: "Rare Holo",
	dexId: [132],
};

export default card;
