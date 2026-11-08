import { Card } from "models/database/card";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "キュウコン",
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		'ja-jp': "黄金に 輝く 体毛と ９本の 長い 尻尾を 持つ。 １０００年は 生きると 言われる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "きゅうびうつし" },
			cost: ["Fire"],
			effect: {
				'ja-jp': "自分のベンチポケモンを1匹選び、選んだポケモンにのっているダメカンをすべて、相手のバトルポケモンにのせ替える。",
			},
		},
		{
			name: { ja: "おにび" },
			damage: 70,
			cost: ["Fire", "Fire"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 876907,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ロコン",
	},

	retreat: 1,
	regulationMark: "J",
	rarity: "Uncommon",
	dexId: [38],
};

export default card;
