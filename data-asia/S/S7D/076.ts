import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "ジュラルドンV",
	},

	illustrator: "Naoki Saito",
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
				ja: "次の相手の番、このワザを受けたポケモンが使うワザのダメージは「-30」される。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 572058,
				tcgplayer: 569399,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Ultra Rare",
	dexId: [884],
};

export default card;
