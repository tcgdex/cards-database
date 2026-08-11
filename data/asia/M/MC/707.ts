import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴヨウ",
	},

	illustrator: "hncl",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、それぞれ自分の手札をすべてウラにして切り、山札の下にもどす。その後、おたがいのプレイヤーは、それぞれコインを1回投げ、オモテなら6枚、ウラなら3枚、山札を引く。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 864009,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "H",
	rarity: "None",
};

export default card;
