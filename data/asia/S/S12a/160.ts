import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒスイの仲間たち",
		'zh-tw': "洗翠的夥伴",
		th: "พวกพ้องในฮิซุย",
	},

	illustrator: "kirisAki",
	category: "Trainer",

	effect: {
		ja: "自分の山札を3枚引く。",
		'zh-tw': "從自己的牌庫抽出3張卡。",
		th: "จั่วการ์ด 3 ใบจากสำรับการ์ดฝ่ายเรา",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687722,
				tcgplayer: 571698,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577514,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "F",
	rarity: "None",
};

export default card;
