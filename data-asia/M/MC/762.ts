import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "メガエンブオーex",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 380,
	types: ["Fire"],

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "クリムゾンボム" },
			damage: 320,
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "このポケモンにも60ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 864064,
			},
		},
	],

	evolveFrom: {
		ja: "チャオブー",
	},

	retreat: 4,
	regulationMark: "J",
	rarity: "None",
	dexId: [500],

	suffix: "EX",
};

export default card;
