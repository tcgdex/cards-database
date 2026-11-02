import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "マーシャドーGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "シャドーハント" },
			effect: {
				ja: "このポケモンは、自分のトラッシュにあるたねポケモンが持っているワザを、すべて使える。［ワザを使うためのエネルギーは必要。］",
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
				ja: "このポケモンについている基本エネルギーの数x50ダメージ。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 550806,
			},
		},
	],

	retreat: 1,
	rarity: "Double rare",
	dexId: [802],

	suffix: "GX",
};

export default card;
