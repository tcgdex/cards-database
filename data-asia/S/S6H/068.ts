import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "メロン",
		'zh-tw': "美蓉",
	},

	illustrator: "take",
	category: "Trainer",

	effect: {
		ja: "自分のトラッシュから[水]エネルギーを1枚選び、自分の「ポケモンV」につける。その後、自分の山札を3枚引く。",
		'zh-tw': "從自己的棄牌區選擇1張【水】能量卡，附於自己的「寶可夢【V】」身上。然後，從自己的牌庫抽出3張卡。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560489,
				tcgplayer: 569200,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "E",
	rarity: "Uncommon",
};

export default card;
