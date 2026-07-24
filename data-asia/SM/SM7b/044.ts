import { Card } from "../../../interfaces";
import Set from "../SM7b";

const card: Card = {
	set: Set,
	name: {
		ja: "のろいのおふだ",
	},

	illustrator: "Ayaka Yoshida",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモンが、相手のワザのダメージを受けてきぜつしたとき、ダメカン4個を、相手のポケモンに好きなようにのせる。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558869,
			},
		},
	],

	trainerType: "Tool",
	rarity: "Uncommon",
};

export default card;
