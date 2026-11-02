import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "サバイバルセット",
		'zh-tw': "生存組合",
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		ja: "自分の山札を下から3枚見て、好きな順番に入れ替えて、山札の上にもどす。",
		'zh-tw': "查看自己的牌庫下方3張卡，以任意順序排列，放回牌庫上方。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560476,
				tcgplayer: 569192,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "E",
	rarity: "Uncommon",
};

export default card;
