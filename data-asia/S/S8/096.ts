import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "カミツレのきらめき",
		'zh-tw': "小菊兒的璀璨",
	},

	illustrator: "Yusuke Ohmura",
	category: "Trainer",

	effect: {
		ja: "自分の「フュージョン」のポケモンを2匹まで選び、山札から「フュージョンエネルギー」を1枚ずつつける。そして山札を切る。",
		'zh-tw': "選擇最多2隻自己的「匯流」寶可夢，從牌庫附給那些寶可夢各1張「匯流能量」卡。並且重洗牌庫。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575651,
				tcgplayer: 569597,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "E",
	rarity: "Uncommon",
};

export default card;
