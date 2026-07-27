import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "ラティオス",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 140,
	types: ["Dragon"],

	description: {
		ja: "高い 知能を 持ち 人間の 言葉を 理解する。 争いを 嫌う 優しい ポケモンだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ドラゴンフリート" },
			damage: "50×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分の場の[竜]タイプの進化ポケモンの数x50ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559028,
			},
		},
	],

	retreat: 1,
	rarity: "Rare Holo",
	dexId: [381],
};

export default card;
