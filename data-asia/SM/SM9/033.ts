import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "アローライシツブテ",
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "石ころと 間違え 踏んでしまうと 怒って 頭突きを かましてくる。 痛いだけでなく ビリッと くるぞ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "じゅうでん" },
			cost: [],
			effect: {
				ja: "自分の山札にある[雷]エネルギーを2枚まで、このポケモンにつける。そして山札を切る。",
			},
		},
		{
			name: { ja: "スマッシュボンバー" },
			damage: 50,
			cost: ["Lightning", "Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558311,
			},
		},
	],

	retreat: 3,
	regulationMark: "C",
	rarity: "Common",
	dexId: [74],
};

export default card;
