import { Card } from "../../../interfaces";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		ja: "ルージュラ",
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "腰を 振るように 歩いている。 油断をすると 思わず 釣られて 踊ってしまうという。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "あまえごえ" },
			cost: ["Psychic"],
			effect: {
				ja: "相手の手札からオモテを見ないで1枚選び、そのカードのオモテを見てから、相手の山札にもどして切る。",
			},
		},
		{
			name: { ja: "モーレツキッス" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560197,
			},
		},
	],

	retreat: 1,
	rarity: "Uncommon",
	dexId: [124],
};

export default card;
