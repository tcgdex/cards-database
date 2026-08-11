import { Card } from "models/database/card";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ミツル",
	},

	illustrator: "Megumi Mizutani",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の場のポケモン1匹（「ポケモンEX」をのぞく）から進化するカードを、自分の山札から1枚選び、そのポケモンにのせて進化させる。そして山札を切る。（最初の自分の番や、出したばかりのポケモンにも使える。）",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 587888,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Promo",
};

export default card;
