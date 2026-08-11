import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "オムナイト",
	},

	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		ja: "古代の海に 生きていた ポケモン。 アーケオスの エサだったようで 歯型のついた 化石が 見つかる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "くすぐる" },
			damage: 30,
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558382,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [138],
};

export default card;
