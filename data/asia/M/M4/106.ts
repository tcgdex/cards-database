import { Card } from "models/database/card";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "スペシャルレッドカード",
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードは、相手のサイドの残り枚数が3枚以下のときにしか使えない。相手は相手自身の手札をすべてウラにして切り、山札の下にもどす。その後、相手は山札を3枚引く。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 877351,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "J",
	rarity: "Ultra Rare",
};

export default card;
