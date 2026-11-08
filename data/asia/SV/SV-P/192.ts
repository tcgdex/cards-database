import { Card } from "models/database/card";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ニャース",
	},

	illustrator: "Uninori",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'ja-jp': "眩しく 光るものが 大好き。 光るものを 見つけたとき なぜか 額の小判も 輝く。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "みだれひっかき" },
			damage: "20×",
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "コインを3回投げ、オモテの数×20ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 807419,
				tcgplayer: 650395,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Promo",
	dexId: [52],
};

export default card;
