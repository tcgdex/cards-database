import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "プテラV",
	},

	illustrator: "Nurikabe",
	category: "Pokemon",
	hp: 210,
	types: ["Fighting"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かみつく" },
			damage: 40,
			cost: ["Fighting", "Colorless"],
		},
		{
			name: { ja: "ロッククラッシュ" },
			damage: 120,
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 668224,
				tcgplayer: 570037,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Ultra Rare",
	dexId: [142],
};

export default card;
