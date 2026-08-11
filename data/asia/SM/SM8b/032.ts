import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ゲコガシラ",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		ja: "身軽さは だれにも 負けない。 ６００メートルを 超える タワーの 天辺まで １分で 登りきる。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "はやてしゅりけん" },
			effect: {
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手のポケモン1匹に、ダメカンを2個のせる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "みずきり" },
			damage: 20,
			cost: ["Water"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 550646,
			},
		},
	],

	evolveFrom: {
		ja: "ケロマツ",
	},

	retreat: 1,
	rarity: "None",
	dexId: [657],
};

export default card;
