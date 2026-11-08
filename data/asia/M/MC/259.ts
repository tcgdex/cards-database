import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ゼクロムex",
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 230,
	types: ["Lightning"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "きりさく" },
			damage: 50,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "ボルテージバースト" },
			damage: "130+",
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				'ja-jp': "相手がすでにとったサイドの枚数×50ダメージ追加。このポケモンにも30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863555,
			},
		},
	],

	retreat: 2,
	regulationMark: "I",
	rarity: "None",
	dexId: [644],

	suffix: "EX",
};

export default card;
