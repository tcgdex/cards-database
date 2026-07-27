import { Card } from "../../../interfaces";
import Set from "../SM11a";

const card: Card = {
	set: Set,
	name: {
		ja: "溶接工",
	},

	illustrator: "Hitoshi Ariga",
	category: "Trainer",

	effect: {
		ja: "自分の手札にある[炎]エネルギーを2枚まで、自分のポケモン1匹につける。その後、自分の山札を3枚引く。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 556748,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "C",
	rarity: "Rare Holo",
};

export default card;
