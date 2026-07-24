import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "ビードル",
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],

	description: {
		ja: "森や 草地に 多く 生息。 頭の 先に ５センチぐらいの 小さく 鋭い 毒針を持つ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "からめてひっぱる" },
			cost: ["Grass"],
			effect: {
				ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
			},
		},
		{
			name: { ja: "むしくい" },
			damage: 10,
			cost: ["Grass"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558280,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [13],
};

export default card;
