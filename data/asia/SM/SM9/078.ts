import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "ジャッジマンホイッスル",
	},

	illustrator: "Ayaka Yoshida",
	category: "Trainer",

	effect: {
		ja: "このカードは、2つの効果から1つを選んで使う。◆自分の山札を1枚引く。◆自分のトラッシュにある「ジャッジマン」を1枚、相手に見せてから、手札に加える。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558440,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "C",
	rarity: "Uncommon",
};

export default card;
