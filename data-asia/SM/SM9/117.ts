import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "ジャッジマンホイッスル",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		ja: "このカードは、2つの効果から1つを選んで使う。◆自分の山札を1枚引く。◆自分のトラッシュにある「ジャッジマン」を1枚、相手に見せてから、手札に加える。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558492,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "C",
	rarity: "Secret Rare",
};

export default card;
