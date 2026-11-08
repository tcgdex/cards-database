import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ハンドトリマー",
	},

	illustrator: "Ayaka Yoshida",
	category: "Trainer",

	effect: {
		'ja-jp': "おたがいのプレイヤーは、それぞれ自分の手札が5枚になるようにトラッシュする。（トラッシュは相手から行う。手札が5枚以下のプレイヤーはトラッシュしない。）",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863955,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "H",
	rarity: "None",
};

export default card;
