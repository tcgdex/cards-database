import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "ズガドーンGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 180,
	types: ["Fire"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "さくれつバーナー" },
			cost: ["Fire"],
			effect: {
				ja: "相手のバトルポケモンをやけどとこんらんにする。",
			},
		},
		{
			name: { ja: "ビックリヘッド" },
			damage: "50×",
			cost: ["Fire", "Fire"],
			effect: {
				ja: "自分の場のポケモンについている[炎]エネルギーを好きなだけロストゾーンに置き、その枚数x50ダメージ。",
			},
		},
		{
			name: { ja: "バーストGX" },
			cost: ["Fire"],
			effect: {
				ja: "自分のサイドを1枚トラッシュし、そのカードがエネルギーなら、自分のポケモンにつける。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558662,
			},
		},
	],

	retreat: 2,
	rarity: "Double rare",
	dexId: [806],

	suffix: "GX",
};

export default card;
