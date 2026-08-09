import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "カイ",
		'zh-tw': "珠貝",
	},

	illustrator: "Naoki Saito",
	category: "Trainer",

	effect: {
		ja: "自分の山札から[W]ポケモンとグッズをそれぞれ1枚ずつ選び、相手に見せて、手札に加える。そして山札を切る。",
		'zh-tw': "從自己的牌庫選擇【水】寶可夢卡與物品卡各1張，在給對手看過後加入手牌。並且重洗牌庫。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687798,
				tcgplayer: 571774,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "F",
	rarity: "Special illustration rare",
};

export default card;
