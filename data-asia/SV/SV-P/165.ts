import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ミガルーサex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひれカッター" },
			damage: 30,
			cost: ["Water"],
		},
		{
			name: { ja: "パージストライク" },
			damage: "120+",
			cost: ["Water", "Water", "Colorless"],
			effect: {
				ja: "のぞむなら、自分の手札をすべてトラッシュする。トラッシュした場合、120ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 778393,
				tcgplayer: 587908,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Promo",
	dexId: [976],

	suffix: "EX",
};

export default card;
