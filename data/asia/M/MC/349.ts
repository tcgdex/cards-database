import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ボチ",
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		'ja-jp': "人と 関わることなく 命を 落とした 野良の 犬ポケモンが 生まれ変わったと 言われている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ふむ" },
			damage: 10,
			cost: ["Psychic"],
		},
		{
			name: { ja: "とっしん" },
			damage: 40,
			cost: ["Psychic", "Colorless"],
			effect: {
				'ja-jp': "このポケモンにも10ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863651,
			},
		},
	],

	retreat: 3,
	regulationMark: "I",
	rarity: "None",
	dexId: [971],
};

export default card;
