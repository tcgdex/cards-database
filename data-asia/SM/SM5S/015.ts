import { Card } from "../../../interfaces";
import Set from "../SM5S";

const card: Card = {
	set: Set,
	name: {
		ja: "ブーバー",
	},

	illustrator: "Yumi",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "怒ると 全身から 灼熱の 炎を 噴き上げる。 相手を 炭に するまで 収まらない。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "のやき" },
			cost: ["Fire"],
			effect: {
				ja: "相手の山札を上から1枚トラッシュする。",
			},
		},
		{
			name: { ja: "かえんほうしゃ" },
			damage: 80,
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559969,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [126],
};

export default card;
