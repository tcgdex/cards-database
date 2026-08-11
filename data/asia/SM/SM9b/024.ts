import { Card } from "models/database/card";
import Set from "../SM9b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ゴローン",
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		'ja-jp': "崖を 登り 山頂を 目指す。 てっぺんに 着くなり すぐに 来た 山道を 転がり 落ちていく。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "いわころがり" },
			damage: 50,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
		{
			name: { ja: "すてみタックル" },
			damage: 90,
			cost: ["Fighting", "Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンにも30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558142,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "イシツブテ",
	},

	retreat: 4,
	regulationMark: "C",
	rarity: "Common",
	dexId: [75],
};

export default card;
