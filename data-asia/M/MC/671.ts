import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "リブートポッド",
	},

	illustrator: "inose yukie",
	category: "Trainer",

	effect: {
		ja: "自分の「未来」のポケモン全員に、トラッシュから基本エネルギーを1枚ずつつける。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863973,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "H",
	rarity: "None",
};

export default card;
