import { Card } from "../../../interfaces";
import Set from "../CP2";

const card: Card = {
	set: Set,
	name: {
		ja: "ニャース",
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "まるいものが 大好き。 夜な夜な 出かけては 落ちている コインを 拾い 集めて 帰ってくる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "へとへとタックル" },
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンに30ダメージ。ウラなら、このポケモンに30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 563503,
				tcgplayer: 605344,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [52],
};

export default card;
