import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ゼイユ",
	},

	illustrator: "kantaro",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードは、先攻プレイヤーの最初の番でも使える。自分の手札をすべてトラッシュし、山札を5枚引く。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 864017,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "H",
	rarity: "None",
};

export default card;
