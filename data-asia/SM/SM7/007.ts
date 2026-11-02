import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "コノハナ",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "森の 奥深くに 生息。 頭の 葉っぱで 笛を 作り 不安に させる 音色を 出す。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "はたく" },
			damage: 20,
			cost: ["Grass"],
		},
		{
			name: { ja: "ひとばらい" },
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手の手札を見て、その中にあるサポートを1枚、相手の山札にもどして切る。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558968,
			},
		},
	],

	evolveFrom: {
		ja: "タネボー",
	},

	retreat: 2,
	rarity: "Common",
	dexId: [274],
};

export default card;
