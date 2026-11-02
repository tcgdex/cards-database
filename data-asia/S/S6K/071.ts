import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "セレビィV",
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 190,
	types: ["Grass"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "わかばのまい" },
			cost: ["Grass"],
			effect: {
				ja: "自分の手札から[草]エネルギーを好きなだけ選び、自分のポケモンに好きなようにつける。",
			},
		},
		{
			name: { ja: "スラッシュバック" },
			damage: 60,
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "このポケモンをベンチポケモンと入れ替える。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560972,
				tcgplayer: 569299,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Ultra Rare",
	dexId: [251],
};

export default card;
