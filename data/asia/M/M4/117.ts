import { Card } from "models/database/card";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "チラチーノex",
	},

	illustrator: "Keisin",
	category: "Pokemon",
	hp: 240,
	types: ["Colorless"],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "なめらかコート" },
			effect: {
				'ja-jp': "このポケモンがワザのダメージを受けるとき、自分はコインを1回投げる。オモテなら、このポケモンはそのダメージを受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "エナジービンタ" },
			damage: "40×",
			cost: ["Colorless"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーの数×40ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 877379,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "チラーミィ",
	},

	retreat: 1,
	regulationMark: "J",
	rarity: "Special illustration rare",
	dexId: [573],

	suffix: "EX",
};

export default card;
