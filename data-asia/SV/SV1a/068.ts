import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "ハヤト",
		'zh-tw': "阿速",
		th: "ฮายาโตะ",
		id: "Falkner"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "自分の山札を2枚引く。場に自分のスタジアムが出ているなら、さらに2枚引く。",
		'zh-tw': "從自己的牌庫抽出2張卡。若場上有自己的競技場卡，則再抽出2張卡。",
		th: "จั่วการ์ด 2 ใบจากสำรับการ์ดฝ่ายเรา ถ้ามีการ์ดสเตเดียมฝ่ายเราอยู่บนกระดาน จะจั่วการ์ดเพิ่มได้ 2 ใบ",
		id: "Ambil 2 kartu dari atas Deck sendiri. Jika ada Stadium sendiri di Arena, ambil lagi 2 kartu tambahan."
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card