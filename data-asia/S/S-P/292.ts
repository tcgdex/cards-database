import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "カイリューV",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 230,
	types: ["Dragon"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はかいこうせん" },
			damage: 60,
			cost: ["Water", "Lightning"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
			},
		},
		{
			name: { ja: "バスターテール" },
			damage: 160,
			cost: ["Water", "Lightning", "Colorless"],
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 664347,
				tcgplayer: 597465,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Promo",
	dexId: [149],
};

export default card;
