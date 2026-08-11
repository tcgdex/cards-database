import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ネンドール",
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "２万年前の 古代人が つくった 泥人形から 生まれたらしい 謎の ポケモン。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "たいかこうせん" },
			damage: 50,
			cost: ["Fighting"],
			effect: {
				ja: "相手の進化しているバトルポケモンから、「進化カード」を1枚はがして退化させる。はがしたカードは、相手の手札にもどす。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 876946,
			},
		},
	],

	evolveFrom: {
		ja: "ヤジロン",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "Uncommon",
	dexId: [344],
};

export default card;
