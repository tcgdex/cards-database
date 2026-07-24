import { Card } from "../../../interfaces";
import Set from "../SM5M";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒポポタス",
	},

	illustrator: "Yumi",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		ja: "全身に 砂を まとうことで ばい菌から 体を 守る。 水に ぬれることが 苦手。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "どたんばタックル" },
			damage: "50+",
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: {
				ja: "自分の山札の残り枚数が3枚以下なら、130ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559851,
			},
		},
	],

	retreat: 3,
	rarity: "Common",
	dexId: [449],
};

export default card;
