import { Card } from "models/database/card";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "テールナー",
	},

	illustrator: "Taiga Kasai",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],

	description: {
		'ja-jp': "木の枝を 尻尾に 挿している。 尻尾の 毛の 摩擦熱で 枝に 火をつけて 戦う。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "かえんほうしゃ" },
			damage: 80,
			cost: ["Fire", "Fire"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーを1個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 876911,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "フォッコ",
	},

	retreat: 1,
	regulationMark: "J",
	rarity: "Common",
	dexId: [654],
};

export default card;
