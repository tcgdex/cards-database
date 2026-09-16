import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ディアルガ",
	},

	illustrator: "toriyufu",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		ja: "ディアルガが 生まれたことで 時間が 動き出したという 伝説を 持つ ポケモン。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "リバースクロック" },
			cost: ["Colorless"],
			effect: {
				ja: "自分のトラッシュからポケモンと基本エネルギーを合計3枚まで選び、相手に見せて、山札にもどして切る。",
			},
		},
		{
			name: { ja: "ヘビーインパクト" },
			damage: 110,
			cost: ["Metal", "Metal", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908260,
			},
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "None",
	dexId: [483],
};

export default card;
