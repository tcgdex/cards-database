import { Card } from "models/database/card";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "サカキの追放",
	},

	illustrator: "TOKIYA",
	category: "Trainer",

	effect: {
		'ja-jp': "ダメカンがのっていない自分のベンチポケモンを2匹まで選び、選んだポケモンと、ついているすべてのカードを、トラッシュする。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557463,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "C",
	rarity: "Ultra Rare",
};

export default card;
