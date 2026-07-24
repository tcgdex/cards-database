import { Card } from "../../../interfaces";
import Set from "../SM2L";

const card: Card = {
	set: Set,
	name: {
		ja: "マオ",
	},

	illustrator: "Megumi Mizutani",
	category: "Trainer",

	effect: {
		ja: "自分の山札から好きなカードを2枚選ぶ。残りの山札を切り、選んだカードを好きな順番にして、山札の上にもどす。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561459,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Ultra Rare",
};

export default card;
