import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "タツベイ",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 70,
	types: ["Dragon"],

	description: {
		ja: "鋼鉄並みの 石頭で やたら めったら 頭突きする。 空を 飛べない ストレスの せいだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "とつげき" },
			damage: 40,
			cost: ["Fire", "Colorless"],
			effect: {
				ja: "このポケモンにも10ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559024,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [371],
};

export default card;
