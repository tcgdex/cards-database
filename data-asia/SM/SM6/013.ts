import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "テールナー",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		ja: "木の枝を 尻尾から 引き抜くとき 摩擦で 着火。 枝の 炎を 振って 仲間に 合図を 送る。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ほのお" },
			damage: 20,
			cost: ["Fire"],
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
				cardmarket: 559558,
			},
		},
	],

	evolveFrom: {
		ja: "フォッコ",
	},

	retreat: 2,
	rarity: "Common",
	dexId: [654],
};

export default card;
