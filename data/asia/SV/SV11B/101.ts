import { Card } from "models/database/card";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ランプラー",
	},

	illustrator: "Ligton",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		'ja-jp': "不吉な ポケモンと 怖がられる。 死者の 魂を 求めて 街中を フラフラと さまよう。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "だいもんじ" },
			damage: 50,
			cost: ["Fire"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーを1個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [{ type: "holo" }],

	evolveFrom: {
		'ja-jp': "ヒトモシ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [608],

	thirdParty: {
		cardmarket: 829344,
		tcgplayer: 636455,
	},
};

export default card;
