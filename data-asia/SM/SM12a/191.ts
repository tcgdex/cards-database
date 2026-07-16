import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "カスミ&カンナ",
	},

	illustrator: "Ryuta Fuse",
	category: "Trainer",

	effect: {
		ja: "自分の山札にある[水]エネルギーを3枚まで、相手に見せてから、手札に加える。そして山札を切る。追加で、このカードを使うときに、自分の手札を5枚トラッシュしてよい。その場合、この番、自分の[水]ポケモンは、自分がすでにGXワザを使っていても、GXワザが使える。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 544496,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "C",
	rarity: "Ultra Rare",
};

export default card;
