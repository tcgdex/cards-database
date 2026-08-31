import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "マーイーカ",
	},

	illustrator: "Rond",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はたきおとす" },
			damage: 10,
			cost: ["Darkness"],
			effect: {
				ja: "相手の手札からオモテを見ないで1枚選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 900111,
				tcgplayer: 709238,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Mega Hyper Rare",
	dexId: [686],
};

export default card;
