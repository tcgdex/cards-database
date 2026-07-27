import { Card } from "../../../interfaces";
import Set from "../SM9b";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴローン",
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "崖を 登り 山頂を 目指す。 てっぺんに 着くなり すぐに 来た 山道を 転がり 落ちていく。",
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
				ja: "このポケモンにも30ダメージ。",
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
		ja: "イシツブテ",
	},

	retreat: 4,
	regulationMark: "C",
	rarity: "Common",
	dexId: [75],
};

export default card;
