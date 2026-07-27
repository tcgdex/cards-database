import { Card } from "../../../interfaces";
import Set from "../SM2K";

const card: Card = {
	set: Set,
	name: {
		ja: "ジャラコ",
	},

	illustrator: "match",
	category: "Pokemon",
	hp: 60,
	types: ["Dragon"],

	description: {
		ja: "ウロコを 叩き 気持ちを 伝える。 ジャラコの 棲む 高山では 金属音が 木霊する。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ぼうだん" },
			effect: {
				ja: "このポケモンが受けるワザのダメージは「-10」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ドラゴンクロー" },
			damage: 30,
			cost: ["Lightning", "Fighting"],
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561505,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [782],
};

export default card;
