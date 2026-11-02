import { Card } from "../../../interfaces";
import Set from "../SM11a";

const card: Card = {
	set: Set,
	name: {
		ja: "ローラースケーター",
	},

	illustrator: "Yusuke Ohmura",
	category: "Trainer",

	effect: {
		ja: "自分の手札を1枚トラッシュする。その後、山札を2枚引く。トラッシュしたカードがエネルギーなら、さらに2枚引く。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556732,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "C",
	rarity: "Common",
};

export default card;
