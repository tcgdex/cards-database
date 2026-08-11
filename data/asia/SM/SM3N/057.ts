import { Card } from "../../../interfaces";
import Set from "../SM3N";

const card: Card = {
	set: Set,
	name: {
		ja: "ビッケ",
	},

	illustrator: "Naoki Saito",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、それぞれ自分の手札を数えたあと、すべて山札にもどして切る。その後、おたがいのプレイヤーは、それぞれもどした枚数ぶん山札を引く。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561057,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Ultra Rare",
};

export default card;
