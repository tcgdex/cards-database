import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "力の砂時計",
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		ja: "自分の番の終わりに、このカードをつけているポケモンがバトル場にいるなら、自分のトラッシュから基本エネルギーを1枚選び、そのポケモンにつけてよい。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863985,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "H",
	rarity: "None",
};

export default card;
