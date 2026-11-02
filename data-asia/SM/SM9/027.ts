import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "コイキング",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],

	description: {
		ja: "遥か 大昔は それなりに 強かったが 時が 経つに つれて どんどんどんどん 弱くなっていった。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "とうりゅうもん" },
			cost: ["Water"],
			effect: {
				ja: "コインを1回投げオモテなら、このポケモンから進化するカードを、自分のトラッシュから1枚選び、このポケモンにのせて進化させる。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558305,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [129],
};

export default card;
