import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "スペシャルレッドカード",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		ja: "このカードは、相手のサイドの残り枚数が3枚以下のときにしか使えない。 相手は相手自身の手札をすべてウラにして切り、山札の下にもどす。その後、相手は山札を3枚引く。 グッズは、自分の番に何枚でも使える。",
	},

	variants: [{"type": "holo"}],

	trainerType: "Item",
	regulationMark: "I",
	rarity: "Special illustration rare",
};

export default card;
