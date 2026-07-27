import { Card } from "../../../interfaces";
import Set from "../SM4A";

const card: Card = {
	set: Set,
	name: {
		ja: "ピカチュウ",
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "たくさんの ピカチュウを 集め 発電所を 造る 計画が 最近 発表 された。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ピカドロー" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札を1枚引く。",
			},
		},
		{
			name: { ja: "でんこうせっか" },
			damage: "20+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、20ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560260,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [25],
};

export default card;
