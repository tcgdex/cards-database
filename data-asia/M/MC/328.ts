import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "フラベベ",
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 40,
	types: ["Psychic"],

	description: {
		ja: "赤い花に 乗った フラベベ。 生まれると すぐに お気に入りの 花を 探すために 飛びまわる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "きずをなおす" },
			cost: ["Colorless"],
			effect: {
				ja: "自分のポケモン1匹のHPを「30」回復する。",
			},
		},
		{
			name: { ja: "ようせいのかぜ" },
			damage: 10,
			cost: ["Psychic"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863630,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [669],
};

export default card;
