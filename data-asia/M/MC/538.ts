import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "タツベイ",
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 70,
	types: ["Dragon"],

	description: {
		ja: "鋼鉄並みに 硬い 頭は 岩も 粉々に 砕く。 翼が 生えるのを 待ち続ける。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かみつく" },
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: { ja: "とつげき" },
			damage: 50,
			cost: ["Fire", "Water"],
			effect: {
				ja: "このポケモンにも10ダメージ。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863840,
			},
		},
	],

	retreat: 2,
	regulationMark: "I",
	rarity: "None",
	dexId: [371],
};

export default card;
