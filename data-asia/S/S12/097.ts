import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "原始祭壇",
		th: "แท่นบูชาอนารยะ",
		ja: "未開の祭壇"
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		'zh-tw': "雙方玩家在每個自己的回合時，可使用1次，可查看自己的牌庫上方1張卡，回復原樣。若希望，將那張卡丟棄。",
		th: "ผู้เล่นทั้งสองฝ่าย ในแต่ละเทิร์นของตัวเองทำได้ 1 ครั้ง ดูการ์ด 1 ใบจากด้านบนของสำรับการ์ดฝ่ายตัวเอง แล้วคืนที่เดิมก็ได้ หากต้องการ ทิ้งการ์ดใบนั้นที่ตำแหน่งทิ้งการ์ด",
		ja: "おたがいのプレイヤーは、自分の番ごとに1回、自分の山札を上から1枚見て、もとにもどしてよい。のぞむなら、そのカードをトラッシュする。"
	},

	trainerType: "Stadium",
	regulationMark: "F",
	rarity: "Uncommon"
}

export default card