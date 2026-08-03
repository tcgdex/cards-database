import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ヌオーV",
	},

	illustrator: "PLANETA Igarashi",
	category: "Pokemon",
	hp: 220,
	types: ["Water"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "てんねん" },
			effect: {
				ja: "このポケモンは、相手のポケモンが使うワザの効果を受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "どろんこヘッド" },
			damage: "100+",
			cost: ["Water", "Water", "Colorless"],
			effect: {
				ja: "このポケモンに[F]エネルギーがついているなら、120ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 678809,
				tcgplayer: 597484,
			},
		},
	],

	retreat: 3,
	regulationMark: "F",
	rarity: "Promo",
	dexId: [195],
};

export default card;
