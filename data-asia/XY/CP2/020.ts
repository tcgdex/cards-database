import { Card } from "../../../interfaces";
import Set from "../CP2";

const card: Card = {
	set: Set,
	name: {
		ja: "ブラックキュレム",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "サンダーネイル" },
			damage: 40,
			cost: ["Lightning", "Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
		{
			name: { ja: "ひょうけつざん" },
			damage: 120,
			cost: ["Water", "Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "このポケモンにも20ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 563501,
				tcgplayer: 605329,
			},
		},
	],

	retreat: 3,
	rarity: "Rare",
	dexId: [646],
};

export default card;
