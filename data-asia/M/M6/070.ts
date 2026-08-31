import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "フウとランの修行",
	},

	illustrator: "Yuu Nishida",
	category: "Trainer",

	effect: {
		ja: "自分の山札を2枚引く。その後、名前に「伝説」とつくスタジアムが場に出ているなら、この「フウとランの修行」はトラッシュせず、手札にもどす。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 900007,
				tcgplayer: 709223,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "J",
	rarity: "Uncommon",
};

export default card;
