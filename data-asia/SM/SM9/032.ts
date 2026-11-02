import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "アローライシツブテ",
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "石ころと 間違え 踏んでしまうと 怒って 頭突きを かましてくる。 痛いだけでなく ビリッと くるぞ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "じばく" },
			damage: 60,
			cost: ["Lightning", "Colorless"],
			effect: {
				ja: "このポケモンにも60ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558310,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [74],
};

export default card;
