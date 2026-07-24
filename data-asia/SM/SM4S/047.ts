import { Card } from "../../../interfaces";
import Set from "../SM4S";

const card: Card = {
	set: Set,
	name: {
		ja: "のぞきみレッドカード",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "相手の手札を見る。のぞむなら、相手に相手自身の手札を数えさせたあと、すべて山札にもどして切らせる。その場合、相手はもどした枚数ぶん山札を引く。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560359,
			},
		},
	],

	trainerType: "Item",
	rarity: "Uncommon",
};

export default card;
