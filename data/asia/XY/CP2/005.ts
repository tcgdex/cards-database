import { Card } from "../../../interfaces";
import Set from "../CP2";

const card: Card = {
	set: Set,
	name: {
		ja: "パルキア",
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "スプラッシュ" },
			damage: 30,
			cost: ["Water", "Colorless"],
		},
		{
			name: { ja: "クロススライサー" },
			damage: 80,
			cost: ["Water", "Water", "Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、手札からエネルギーを出してつけられない。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 563486,
				tcgplayer: 605346,
			},
		},
	],

	retreat: 3,
	rarity: "Rare",
	dexId: [484],
};

export default card;
