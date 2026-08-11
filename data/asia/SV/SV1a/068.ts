import { Card } from "models/database/card"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ハヤト",
		'zh-tw': "阿速",
		'th-th': "ฮายาโตะ",
		'id-id': "Falkner"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札を2枚引く。場に自分のスタジアムが出ているなら、さらに2枚引く。",
		'zh-tw': "從自己的牌庫抽出2張卡。若場上有自己的競技場卡，則再抽出2張卡。",
		'th-th': "จั่วการ์ด 2 ใบจากสำรับการ์ดฝ่ายเรา ถ้ามีการ์ดสเตเดียมฝ่ายเราอยู่บนกระดาน จะจั่วการ์ดเพิ่มได้ 2 ใบ",
		'id-id': "Ambil 2 kartu dari atas Deck sendiri. Jika ada Stadium sendiri di Arena, ambil lagi 2 kartu tambahan."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 701122,
				tcgplayer: 568191,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card