import { Card } from "../../../interfaces";
import Set from "../SM1S";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴルダック",
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		ja: "額の 赤い 部分を 持つと 神通力を 授かると いわれ 乱獲 された 過去も ある。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ひっかく" },
			damage: 20,
			cost: ["Colorless"],
		},
		{
			name: { ja: "ダブルジェット" },
			damage: "60×",
			cost: ["Water"],
			effect: {
				ja: "自分の手札から[水]エネルギーを2枚までトラッシュし、その枚数x60ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561689,
			},
		},
	],

	evolveFrom: {
		ja: "コダック",
	},

	retreat: 0,
	rarity: "Uncommon",
	dexId: [55],
};

export default card;
