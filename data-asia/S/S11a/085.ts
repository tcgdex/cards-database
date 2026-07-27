import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "クチートV",
	},

	illustrator: "saino misaki",
	category: "Pokemon",
	hp: 200,
	types: ["Psychic"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ふきげんスラップ" },
			damage: 30,
			cost: ["Psychic"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
			},
		},
		{
			name: { ja: "かみおとす" },
			damage: 100,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手の手札からオモテを見ないで1枚選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 673402,
				tcgplayer: 570848,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Character Super Rare",
	dexId: [303],
};

export default card;
