import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "あやしい時計",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "自分の進化している[P]ポケモンを1匹選び、「進化カード」を好きなだけはがして退化させる。はがしたカードは、手札にもどす。［退化したポケモンは、その番に進化できない。］",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863934,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "I",
	rarity: "None",
};

export default card;
