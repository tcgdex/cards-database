import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "セイジ",
	},

	illustrator: "Ryuta Fuse",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の場のポケモン1匹から進化するカード（特性を持つポケモンをのぞく）を、自分の山札から1枚選び、そのポケモンにのせて進化させる。そして山札を切る。（対戦準備で出したポケモンや、この番出したばかりのポケモンにも使える。）",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 864016,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "H",
	rarity: "None",
};

export default card;
