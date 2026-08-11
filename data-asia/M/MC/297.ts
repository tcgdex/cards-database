import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "マリルリex",
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
				ja: "自分の番に何回でも使える。自分の場のポケモンについているエネルギーを1個選び、このポケモンにつけ替える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "エナジーバルーン" },
			damage: "60+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについている[P]エネルギーの数×40ダメージ追加。",
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
		ja: "マリル",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "None",
	dexId: [184],

	suffix: "EX",
};

export default card;
