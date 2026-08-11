import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "スペシャルレッドカード",
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		ja: "このカードは、相手のサイドの残り枚数が3枚以下のときにしか使えない。相手は相手自身の手札をすべてウラにして切り、山札の下にもどす。その後、相手は山札を3枚引く。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 876971,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "J",
	rarity: "Uncommon",
};

export default card;
