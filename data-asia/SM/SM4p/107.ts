import { Card } from "../../../interfaces";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		ja: "マオ",
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		ja: "自分の山札から好きなカードを2枚選ぶ。残りの山札を切り、選んだカードを好きな順番にして、山札の上にもどす。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560140,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "None",
};

export default card;
