import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "サカキの追放",
	},

	illustrator: "Megumi Mizutani",
	category: "Trainer",

	effect: {
		ja: "ダメカンがのっていない自分のベンチポケモンを2匹まで選び、選んだポケモンと、ついているすべてのカードを、トラッシュする。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 544391,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "C",
	rarity: "None",
};

export default card;
