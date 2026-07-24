import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "やまおとこ",
	},

	illustrator: "Naoki Saito",
	category: "Trainer",

	effect: {
		ja: "自分または相手の山札を上から5枚見て、その中から好きなカードを1枚選ぶ。残りのカードを山札にもどして切り、選んだカードを山札の上にもどす。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 551276,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Ultra Rare",
};

export default card;
