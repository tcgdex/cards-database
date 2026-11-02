import { Card } from "../../../interfaces";
import Set from "../SM10a";

const card: Card = {
	set: Set,
	name: {
		ja: "リセットスタンプ",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		ja: "相手は相手自身の手札をすべて山札にもどして切る。その後、相手は相手自身のサイドの残り枚数ぶん、山札を引く。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557347,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "C",
	rarity: "Secret Rare",
};

export default card;
