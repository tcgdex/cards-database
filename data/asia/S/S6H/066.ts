import { Card } from "models/database/card";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ドクター",
		'zh-tw': "醫生",
	},

	illustrator: "Megumi Mizutani",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札を2枚引く。相手のバトルポケモンが「ポケモンVMAX」なら、さらに2枚引く。",
		'zh-tw': "從自己的牌庫抽出2張卡。若對手的戰鬥寶可夢為「寶可夢【VMAX】」，則再抽出2張卡。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560484,
				tcgplayer: 569198,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "E",
	rarity: "Uncommon",
};

export default card;
