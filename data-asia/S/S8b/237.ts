import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル サンダーV",
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 200,
	types: ["Fighting"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "とうそうほんのう" },
			effect: {
				ja: "相手の場の「ポケモンV」の数ぶん、このポケモンがワザを使うための【無】エネルギーは少なくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "らいめいげり" },
			damage: 170,
			cost: ["Fighting", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "ダメージを与える前に、相手のバトルポケモンについている特殊エネルギーを1個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 587035,
				tcgplayer: 571489,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Character Super Rare",
	dexId: [145],
};

export default card;
