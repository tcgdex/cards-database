import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "バクガメスGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 190,
	types: ["Fire"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "トラップシェル" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンがワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを8個のせる。",
			},
		},
		{
			name: { ja: "ぐれんのほのお" },
			damage: 160,
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "このポケモンについている[炎]エネルギーを、2個トラッシュする。",
			},
		},
		{
			name: { ja: "ニトロタンクGX" },
			cost: ["Fire"],
			effect: {
				ja: "自分のトラッシュにある[炎]エネルギーを5枚、自分のポケモンに好きなようにつける。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 551556,
			},
		},
	],

	retreat: 3,
	rarity: "Ultra Rare",
	dexId: [776],

	suffix: "GX",
};

export default card;
