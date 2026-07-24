import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "タツベイ",
	},

	illustrator: "Yumi",
	category: "Pokemon",
	hp: 60,
	types: ["Dragon"],

	description: {
		ja: "鋼鉄並みの 石頭で やたら めったら 頭突きする。 空を 飛べない ストレスの せいだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "いしあたま" },
			damage: 10,
			cost: ["Water"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-10」される。",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559023,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [371],
};

export default card;
