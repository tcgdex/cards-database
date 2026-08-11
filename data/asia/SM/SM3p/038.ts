import { Card } from "../../../interfaces";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		ja: "アーボック",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "お腹の 模様が 怖い 顔に 見える。 弱い 敵は その模様を 見ただけで 逃げ出してしまう。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "いかくのもよう" },
			effect: {
				ja: "このポケモンがバトル場にいるかぎり、相手のバトルポケモンが使うワザのダメージは、すべて「-30」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "どくのキバ" },
			damage: 70,
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560196,
			},
		},
	],

	evolveFrom: {
		ja: "アーボ",
	},

	retreat: 3,
	rarity: "Uncommon",
	dexId: [24],
};

export default card;
