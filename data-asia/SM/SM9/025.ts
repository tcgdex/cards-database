import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴルダック",
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		ja: "泳ぎが 速い さかなポケモンでも 金縛りで 動きを 止めて 簡単に 捕まえることが できる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ドわすれ" },
			damage: 20,
			cost: ["Water"],
			effect: {
				ja: "相手のバトルポケモンが持っているワザを1つ選ぶ。次の相手の番、このワザを受けたポケモンは、選ばれたワザを使えない。",
			},
		},
		{
			name: { ja: "およぐ" },
			damage: 90,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手の場のポケモンに[水]エネルギーがついている場合、のぞむなら、このワザのダメージを、相手のバトルポケモンではなくベンチポケモン1匹に与える。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558303,
			},
		},
	],

	evolveFrom: {
		ja: "コダック",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [55],
};

export default card;
