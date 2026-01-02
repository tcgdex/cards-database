import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "ランプラー",
	},

	illustrator: "Ligton",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "不吉な ポケモンと 怖がられる。 死者の 魂を 求めて 街中を フラフラと さまよう。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "だいもんじ" },
			damage: 50,
			cost: ["Fire"],
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false,
	},

	evolveFrom: {
		ja: "ヒトモシ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [608],
};

export default card;
