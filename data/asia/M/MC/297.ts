import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マリルリex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 270,
	types: ["Psychic"],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "シャボンあつめ" },
			effect: {
				'ja-jp': "自分の番に何回でも使える。自分の場のポケモンについているエネルギーを1個選び、このポケモンにつけ替える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "エナジーバルーン" },
			damage: "60+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンについている[P]エネルギーの数×40ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863599,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "マリル",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "None",
	dexId: [184],

	suffix: "EX",
};

export default card;
