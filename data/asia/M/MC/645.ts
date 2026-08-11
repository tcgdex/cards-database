import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "推理セット",
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		ja: "自分の山札を上から3枚見て、好きな順番に入れ替えて、山札の上にもどす。または、そのカードをすべてウラにして切り、山札の下にもどす。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863947,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "H",
	rarity: "None",
};

export default card;
