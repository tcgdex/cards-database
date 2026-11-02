import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ギャロップ",
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	description: {
		ja: "燃える たてがみを はためかせ 時速 ２４０キロの 速度で 大草原を 駆けぬけるのだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "かえん" },
			damage: 20,
			cost: ["Colorless"],
		},
		{
			name: { ja: "もうかのとっしん" },
			damage: 120,
			cost: ["Fire", "Colorless"],
			effect: {
				ja: "このポケモンにも30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863382,
			},
		},
	],

	evolveFrom: {
		ja: "ポニータ",
	},

	retreat: 0,
	regulationMark: "H",
	rarity: "None",
	dexId: [78],
};

export default card;
