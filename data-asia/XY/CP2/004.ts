import { Card } from "../../../interfaces";
import Set from "../CP2";

const card: Card = {
	set: Set,
	name: {
		ja: "テールナー",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "木の枝を 尻尾から 引き抜くとき 摩擦で 着火。 枝の 炎を 振って 仲間に 合図を 送る。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "かえんほうしゃ" },
			damage: 70,
			cost: ["Fire", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 563485,
				tcgplayer: 605330,
			},
		},
	],

	evolveFrom: {
		ja: "フォッコ",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [654],
};

export default card;
