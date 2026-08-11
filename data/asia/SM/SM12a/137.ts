import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "リセットスタンプ",
	},

	illustrator: "OOYAMA",
	category: "Trainer",

	effect: {
		ja: "相手は相手自身の手札をすべて山札にもどして切る。その後、相手は相手自身のサイドの残り枚数ぶん、山札を引く。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 544321,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "C",
	rarity: "None",
};

export default card;
