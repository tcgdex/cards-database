import { Card } from "models/database/card";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ホップのバチンウニex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 200,
	types: ["Lightning"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "はんげきばり" },
			effect: {
				'ja-jp': "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを3個のせる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "スパイクサンダー" },
			damage: 120,
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				'ja-jp': "自分の山札を2枚引く。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 807435,
			},
		},
	],

	retreat: 2,
	regulationMark: "I",
	rarity: "Promo",
	dexId: [871],

	suffix: "EX",
};

export default card;
