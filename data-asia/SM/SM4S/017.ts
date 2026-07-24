import { Card } from "../../../interfaces";
import Set from "../SM4S";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラゴローン",
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],

	description: {
		ja: "ドラバイトを 好んで 喰らう。 喰った 成分が 結晶になり 身体の一部に 浮きだしているぞ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "どつく" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "じばく" },
			damage: 100,
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "このポケモンにも100ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560329,
			},
		},
	],

	evolveFrom: {
		ja: "アローライシツブテ",
	},

	retreat: 3,
	rarity: "Uncommon",
	dexId: [75],
};

export default card;
