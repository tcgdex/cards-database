import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ローズ",
		'zh-tw': "洛茲",
	},

	illustrator: "Yusuke Ohmura",
	category: "Trainer",

	effect: {
		ja: "自分のトラッシュから基本エネルギーを2枚まで選び、自分の「ポケモンVMAX」1匹につける。その後、自分の手札をすべてトラッシュする。",
		'zh-tw': "從自己的棄牌區選擇最多2張基本能量卡，附於自己的1隻「寶可夢【VMAX】」身上。然後，將自己的手牌全部丟棄。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586681,
				tcgplayer: 571417,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578443,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "D",
	rarity: "None",
};

export default card;
