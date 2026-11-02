import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "バトルVIPパス",
		'zh-tw': "對戰VIP參加證",
	},

	illustrator: "Ryo Ueda",
	category: "Trainer",

	effect: {
		ja: "このカードは、最初の自分の番にしか使えない。自分の山札からたねポケモンを2枚まで選び、ベンチに出す。そして山札を切る。",
		'zh-tw': "這張卡只能在自己的最初回合使用。 從自己的牌庫選擇最多2張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575646,
				tcgplayer: 569592,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "E",
	rarity: "Uncommon",
};

export default card;
