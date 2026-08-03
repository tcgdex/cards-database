import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "キュレムV",
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 220,
	types: ["Water"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "きゅうげきれいとう" },
			cost: ["Water"],
			effect: {
				ja: "自分の手札から[W]エネルギーを好きなだけ選び、自分のポケモンに好きなようにつける。",
			},
		},
		{
			name: { ja: "フロストスマッシュ" },
			damage: 140,
			cost: ["Water", "Water", "Water"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 668220,
				tcgplayer: 570033,
			},
		},
	],

	retreat: 3,
	regulationMark: "F",
	rarity: "Ultra Rare",
	dexId: [646],
};

export default card;
