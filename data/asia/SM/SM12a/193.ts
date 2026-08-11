import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "グリーンの戦略",
	},

	illustrator: "TOKIYA",
	category: "Trainer",

	effect: {
		ja: "このカードを使った番の終わりに、自分の手札が8枚になるように、山札を引く。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 544506,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "C",
	rarity: "Ultra Rare",
};

export default card;
