import { Card } from "models/database/card";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ニンフィア",
	},

	illustrator: "YU NAGABA",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	description: {
		'ja-jp': "敵意を 消す 癒しの 波動を リボンのような 触角から 相手の 体に 送り込む。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "いやしのひかり" },
			damage: 100,
			cost: ["Psychic", "Psychic", "Colorless"],
			effect: {
				'ja-jp': "自分のポケモン全員のHPを、それぞれ「10」回復する。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 708485,
				tcgplayer: 587828,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "イーブイ",
	},

	retreat: 1,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [700],
};

export default card;
