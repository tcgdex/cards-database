import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "シバ",
		'zh-tw': "希巴",
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		ja: "自分の手札をすべて山札にもどして切る。その後、山札を4枚引く。前の相手の番に、自分のポケモンがきぜつしていたなら、引く枚数は7枚になる。",
		'zh-tw': "將自己的手牌全部放回牌庫並重洗。然後，從牌庫抽出4張卡。在上個對手的回合，若自己的寶可夢【氣絕】了，則改爲抽出7張卡。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586669,
				tcgplayer: 571406,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578434,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "E",
	rarity: "None",
};

export default card;
