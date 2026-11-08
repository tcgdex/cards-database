import { Card } from "models/database/card";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ジュラルドンV",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 220,
	types: ["Dragon"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "メタルクロー" },
			damage: 70,
			cost: ["Fighting", "Metal"],
		},
		{
			name: { ja: "ワイドブレイカー" },
			damage: 140,
			cost: ["Fighting", "Metal", "Metal"],
			effect: {
				'ja-jp': "次の相手の番、このワザを受けたポケモンが使うワザのダメージは「-30」される。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 572057,
				tcgplayer: 569398,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Ultra Rare",
	dexId: [884],
};

export default card;
