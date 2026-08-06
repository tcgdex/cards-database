import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ススキ",
		'zh-tw': "阿芒",
	},

	illustrator: "Akira Komayama",
	category: "Trainer",

	effect: {
		ja: "自分の山札を2枚引く。自分のバトルポケモンが名前に「ヒスイ」とつくポケモンなら、さらに2枚引く。",
		'zh-tw': "從自己的牌庫抽出2張卡。若自己的戰鬥寶可夢為名稱中有「洗翠」的寶可夢，則再抽出2張卡。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 656392,
				tcgplayer: 570731,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577135,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "F",
	rarity: "Uncommon",
};

export default card;
