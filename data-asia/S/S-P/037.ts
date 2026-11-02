import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ダイオウドウV",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "こんごうプレス" },
			damage: 90,
			cost: ["Metal", "Metal", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。",
			},
		},
		{
			name: { ja: "たたきつぶす" },
			damage: 180,
			cost: ["Metal", "Metal", "Metal", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 463099,
				tcgplayer: 597257,
			},
		},
	],

	retreat: 4,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [879],
};

export default card;
