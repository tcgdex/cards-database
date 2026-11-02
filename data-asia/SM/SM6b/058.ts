import { Card } from "../../../interfaces";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		ja: "ポケナビ",
	},

	illustrator: "Katsura Tabata",
	category: "Trainer",

	effect: {
		ja: "自分の山札を上から3枚見る。その中にあるポケモンまたはエネルギーを1枚、相手に見せてから、手札に加えてよい。残りのカードは、好きな順番に入れ替えて、山札の上にもどす。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559208,
			},
		},
	],

	trainerType: "Item",
	rarity: "Uncommon",
};

export default card;
