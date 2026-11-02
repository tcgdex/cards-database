import { Card } from "../../../interfaces";
import Set from "../SM9b";

const card: Card = {
	set: Set,
	name: {
		ja: "カメックスGX",
	},

	illustrator: "",
	category: "Pokemon",
	hp: 240,
	types: ["Water"],

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "かたいこうら" },
			effect: {
				ja: "このポケモンが受けるワザのダメージは「-30」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ロケットスプラッシュ" },
			damage: "60×",
			cost: ["Water", "Water"],
			effect: {
				ja: "自分の場のポケモンについている[水]エネルギーを好きなだけ山札にもどし、その枚数x60ダメージ。その場合、山札を切る。",
			},
		},
		{
			name: { ja: "だいほうすいGX" },
			cost: ["Water"],
			effect: {
				ja: "自分の手札にある[水]エネルギーを好きなだけ、自分のポケモンに好きなようにつける。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558182,
			},
		},
	],

	evolveFrom: {
		ja: "カメール",
	},

	retreat: 3,
	regulationMark: "C",
	rarity: "Hyper rare",
	dexId: [9],

	suffix: "GX",
};

export default card;
