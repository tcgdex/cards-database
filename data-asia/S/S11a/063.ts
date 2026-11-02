import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "ジャッジマン",
		'zh-tw': "裁判",
	},

	illustrator: "Ryuta Fuse",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、それぞれ、手札をすべて山札にもどし、山札を切る。その後、それぞれの山札を4枚引く。",
		'zh-tw': "雙方玩家各將手牌全部放回牌庫並重洗。然後，各從牌庫抽出4張。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 673061,
				tcgplayer: 570826,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				tcgplayer: 570908,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "E",
	rarity: "Uncommon",
};

export default card;
