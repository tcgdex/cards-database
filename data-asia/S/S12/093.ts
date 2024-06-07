import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "工人",
		th: "คนงาน",
		ja: "さぎょういん"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Trainer",

	effect: {
		'zh-tw': "從自己的牌庫抽出3張卡。將場上的競技場卡丟棄。",
		th: "จั่วการ์ด 3 ใบจากสำรับการ์ดฝ่ายเรา ทิ้งการ์ดสเตเดียมบนกระดานที่ตำแหน่งทิ้งการ์ด",
		ja: "自分の山札を3枚引く。場に出ているスタジアムをトラッシュする。"
	},

	trainerType: "Supporter",
	regulationMark: "F",
	rarity: "Uncommon"
}

export default card