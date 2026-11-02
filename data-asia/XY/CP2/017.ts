import { Card } from "../../../interfaces";
import Set from "../CP2";

const card: Card = {
	set: Set,
	name: {
		ja: "ディアルガ",
	},

	illustrator: "TOKIYA",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "メタルクロー" },
			damage: 30,
			cost: ["Metal", "Colorless"],
		},
		{
			name: { ja: "じかんとうけつ" },
			damage: 80,
			cost: ["Metal", "Metal", "Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、手札からポケモンを出して進化できない。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 563498,
				tcgplayer: 605334,
			},
		},
	],

	retreat: 3,
	rarity: "Rare",
	dexId: [483],
};

export default card;
