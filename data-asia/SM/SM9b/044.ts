import { Card } from "../../../interfaces";
import Set from "../SM9b";

const card: Card = {
	set: Set,
	name: {
		ja: "退化スプレーZ",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "自分の進化しているポケモンを1匹選び、そのポケモンの上から「進化カード」を好きなだけはがして退化させる。はがしたカードは、山札にもどして切る。［退化したポケモンは、その番に進化できない。］",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558162,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "C",
	rarity: "Uncommon",
};

export default card;
