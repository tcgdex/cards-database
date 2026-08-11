import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "リブートポッド",
	},

	illustrator: "inose yukie",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の「未来」のポケモン全員に、トラッシュから基本エネルギーを1枚ずつつける。",
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
