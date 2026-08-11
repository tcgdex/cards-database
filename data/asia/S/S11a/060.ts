import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "キャプチャーアロマ",
		'zh-tw': "捕獲香氛",
	},

	illustrator: "sadaji",
	category: "Trainer",

	effect: {
		ja: "コインを1回投げる。オモテなら進化ポケモン、ウラならたねポケモンを自分の山札から1枚選び、相手に見せて、手札に加える。そして山札を切る。",
		'zh-tw': "擲1次硬幣。若為正面，則從自己的牌庫選擇1張進化寶可夢卡，若為反面，則選擇1張【基礎】寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 673058,
				tcgplayer: 570823,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				tcgplayer: 570905,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "F",
	rarity: "Uncommon",
};

export default card;
