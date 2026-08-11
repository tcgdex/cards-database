import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ミュウツーV",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 220,
	types: ["Psychic"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ちょうねんりき" },
			damage: 50,
			cost: ["Psychic", "Colorless"],
		},
		{
			name: { ja: "トランスブレイク" },
			damage: 160,
			cost: ["Psychic", "Psychic", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、ベンチポケモンにつけ替える。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 653676,
				tcgplayer: 597446,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Promo",
	dexId: [150],
};

export default card;
