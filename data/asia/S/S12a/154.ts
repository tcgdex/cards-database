import { Card } from "models/database/card";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "シンオウの仲間たち",
		'zh-tw': "神奧的夥伴",
		'th-th': "พวกพ้องในชินโอ",
	},

	illustrator: "Ryuta Fuse",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札を3枚引く。",
		'zh-tw': "從自己的牌庫抽出3張卡。",
		'th-th': "จั่วการ์ด 3 ใบจากสำรับการ์ดฝ่ายเรา",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687716,
				tcgplayer: 571692,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577510,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "F",
	rarity: "None",
};

export default card;
