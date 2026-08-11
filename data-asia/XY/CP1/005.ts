import { Card } from "../../../interfaces";
import Set from "../CP1";

const card: Card = {
	set: Set,
	name: {
		ja: "アクア団のトドゼルガ",
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	description: {
		ja: "強力な 冷気で 凍らせる ワザが 得意よ。 凍らせたら 鋭い キバで 粉々に するの！",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "パワーブロー" },
			damage: "30×",
			cost: ["Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーの数x30ダメージ。",
			},
		},
		{
			name: { ja: "デュアルブリザード" },
			cost: ["Water", "Water", "Water", "Colorless"],
			effect: {
				ja: "このポケモンについている[水]エネルギーを2個トラッシュし、相手のポケモンを2匹選び、それぞれに80ダメージ。［ベンチは弱点・抵抗力の計算をしない。］",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 563725,
			},
		},
	],

	evolveFrom: {
		ja: "アクア団のトドグラー",
	},

	retreat: 4,
	rarity: "Rare",
	dexId: [365],
};

export default card;
