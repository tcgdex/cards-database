import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ナンジャモのビリリダマ",
	},

	illustrator: "Kazumasa Yasukuni",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "転がって 移動するので 地面が デコボコだと ショックで 爆発してしまう。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "チェインボルト" },
			damage: "20+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分の「ナンジャモのポケモン」全員についている[L]エネルギーの数×20ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863530,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [100],
};

export default card;
