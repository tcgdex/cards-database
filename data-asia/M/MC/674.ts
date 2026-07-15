import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のびっくりボム",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "コインを1回投げオモテなら、相手のポケモン1匹に、ダメカンを2個のせる。ウラなら、自分のバトルポケモンに、ダメカンを2個のせる。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863976,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "I",
	rarity: "None",
};

export default card;
