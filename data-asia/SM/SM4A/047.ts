import { Card } from "../../../interfaces";
import Set from "../SM4A";

const card: Card = {
	set: Set,
	name: {
		ja: "ルザミーネ",
	},

	illustrator: "take",
	category: "Trainer",

	effect: {
		ja: "自分のトラッシュにあるサポートとスタジアムを合計2枚、相手に見せてから、手札に加える。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560294,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Uncommon",
};

export default card;
