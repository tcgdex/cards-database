import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "おじょうさま",
	},

	illustrator: "Yusuke Ohmura",
	category: "Trainer",

	effect: {
		ja: "自分の山札にある基本エネルギーを4枚まで、相手に見せてから、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559630,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Uncommon",
};

export default card;
