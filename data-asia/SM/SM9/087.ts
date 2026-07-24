import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "タケシのガッツ",
	},

	illustrator: "Naoki Saito",
	category: "Trainer",

	effect: {
		ja: "自分のトラッシュからポケモンと基本エネルギーを合計6枚選び、相手に見せてから、山札にもどす。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558460,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "C",
	rarity: "Uncommon",
};

export default card;
