import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "アルセウスフォン",
		'zh-tw': "阿爾宙斯手機",
	},

	illustrator: "5ban Graphics",
	category: "Trainer",

	effect: {
		ja: "自分の山札を上から1枚見て、もとにもどす。のぞむなら、ウラになっている自分のサイドを1枚選び、自分の山札の上のカードと、ウラのまま入れ替える。",
		'zh-tw': "查看自己的牌庫上方1張卡，回復原樣。若希望，選擇1張自己的反面朝上的獎賞卡，與自己的牌庫上方的卡維持反面朝上互換。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 656387,
				tcgplayer: 570726,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577131,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "F",
	rarity: "Uncommon",
};

export default card;
