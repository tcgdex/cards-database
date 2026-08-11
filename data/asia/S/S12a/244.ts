import { Card } from "models/database/card";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "メロン",
		'zh-tw': "美蓉",
	},

	illustrator: "saino misaki",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のトラッシュから[水]エネルギーを1枚選び、自分の「ポケモンV」につける。その後、自分の山札を3枚引く。",
		'zh-tw': "從自己的棄牌區選擇1張【水】能量卡，附於自己的「寶可夢【V】」身上。然後，從自己的牌庫抽出3張卡。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687806,
				tcgplayer: 571782,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "E",
	rarity: "Special illustration rare",
};

export default card;
