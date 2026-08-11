import { Card } from "models/database/card"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "パルデアの仲間たち",
		'id-id': "Teman-teman Paldea",
		'th-th': "พวกพ้องในพัลเดีย",
		'zh-tw': "帕底亞的夥伴",
		'zh-cn': "帕底亞的夥伴"
	},

	illustrator: "Cona Nitanda",
	rarity: "None",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札を3枚引く。",
		'id-id': "Ambil 3 kartu dari atas Deck sendiri.",
		'th-th': "จั่วการ์ด 3 ใบจากสำรับการ์ดฝ่ายเรา",
		'zh-tw': "從自己的牌庫抽出3張卡。",
		'zh-cn': "從自己的牌庫抽出3張卡。"
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 803287,
				tcgplayer: 602624,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 602625,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "H"
}

export default card