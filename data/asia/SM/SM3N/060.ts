import { Card } from "models/database/card";
import Set from "../SM3N";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マーシャドーGX",
	},

	illustrator: "",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "シャドーハント" },
			effect: {
				'ja-jp': "このポケモンは、自分のトラッシュにあるたねポケモンが持っているワザを、すべて使える。［ワザを使うためのエネルギーは必要。］",
			},
		},
	],

	attacks: [
		{
			name: { ja: "せいけんづき" },
			damage: 120,
			cost: ["Fighting", "Fighting", "Colorless"],
		},
		{
			name: { ja: "ひゃくれつむそうGX" },
			damage: "50×",
			cost: ["Fighting"],
			effect: {
				'ja-jp': "このポケモンについている基本エネルギーの数x50ダメージ。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561060,
			},
		},
	],

	retreat: 1,
	rarity: "Hyper rare",
	dexId: [802],

	suffix: "GX",
};

export default card;
