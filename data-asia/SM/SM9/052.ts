import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "マンキー",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 50,
	types: ["Fighting"],

	description: {
		ja: "ちょっとしたことで すぐ 怒る。 ストレスを ため込まないので かなり 長生きする ポケモンだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "さぐる" },
			cost: ["Colorless"],
			effect: {
				ja: "相手の手札を見る。",
			},
		},
		{
			name: { ja: "けたぐり" },
			damage: 30,
			cost: ["Fighting", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558378,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [56],
};

export default card;
