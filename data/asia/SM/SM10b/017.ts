import { Card } from "models/database/card";
import Set from "../SM10b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ユキノオー",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	description: {
		'ja-jp': "ブリザードを 発生させて あたり 一面を 真っ白に してしまう。 別名 アイスモンスター。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "きゅうそくれいとう" },
			damage: 70,
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンに[水]エネルギーがついているなら、相手のバトルポケモンをマヒにする。",
			},
		},
		{
			name: { ja: "ワイルドタックル" },
			damage: 140,
			cost: ["Water", "Water", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンにも20ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557208,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ユキカブリ",
	},

	retreat: 4,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [460],
};

export default card;
