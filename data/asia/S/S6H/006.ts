import { Card } from "models/database/card";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "メブキジカ",
		'zh-tw': "萌芽鹿",
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		'ja-jp': "季節の 移り変わりと ともに 住処を 変えるので メブキジカが 春を運ぶと いう 人もいる。",
		'zh-tw': "會隨著季節的推移改變居所。所以也有人說萌芽鹿會運來春天。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "たいあたり",
				'zh-tw': "連擊觸手",
			},
			damage: 30,
			cost: ["Colorless"],
		},
		{
			name: { ja: "ウインターホーン" },
			damage: "80+",
			cost: ["Grass", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "場に自分のスタジアムが出ているなら、80ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560422,
				tcgplayer: 569138,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "シキジカ",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [586],
};

export default card;
