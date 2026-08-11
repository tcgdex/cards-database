import { Card } from "models/database/card";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マリル",
	},

	illustrator: "yuu",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'ja-jp': "全身の 体毛は 水を 弾く 性質を 持ち 水浴び しても 乾いている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "たまころがり" },
			damage: "10×",
			cost: ["Colorless"],
			effect: {
				'ja-jp': "ウラが出るまでコインを投げ、オモテの数×10ダメージ。",
			},
		},
		{
			name: { ja: "マジカルショット" },
			damage: 40,
			cost: ["Psychic", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752791,
				tcgplayer: 568360,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "Common",
	dexId: [183],
};

export default card;
