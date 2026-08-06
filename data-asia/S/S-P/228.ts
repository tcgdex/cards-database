import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "キバナ",
		'zh-tw': "慶祝開場樂",
	},

	illustrator: "Hideki Ishikawa",
	category: "Trainer",

	effect: {
		ja: "このカードは、前の相手の番に、自分のポケモンがきぜつしていなければ使えない。自分のトラッシュから基本エネルギーを1枚選び、自分のポケモンにつける。その後、自分の山札から好きなカードを1枚選び、手札に加える。そして山札を切る。",
		'zh-tw': "雙方玩家在每個自己的回合時，可使用1次，可將自己的所有寶可夢各恢復「10」HP。這個情況下，自己的回合結束。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 573773,
				tcgplayer: 597411,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "E",
	rarity: "Promo",
};

export default card;
