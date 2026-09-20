import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "N",
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、それぞれ、手札をすべて山札にもどし、山札を切る。その後、それぞれ、自分のサイドの残り枚数ぶん、山札を引く。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 908331,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Classic Collection",
};

export default card;
