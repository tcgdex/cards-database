import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雷吉奇卡斯VSTAR",
		th: "เรจิกิกัสVSTAR"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 300,
	types: ["Colorless"],
	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "星星守護者",
			th: "สตาร์การ์เดียน"
		},

		effect: {
			'zh-tw': "若對手剩餘獎賞卡的張數為1張，則在自己的回合時可使用。選擇對手的1隻備戰寶可夢，將那隻寶可夢與附加的卡全部丟棄。[對戰中，己方只可使用1次【VSTAR】力量。]",
			th: "ถ้าจำนวนการ์ดรางวัลที่เหลือของฝ่ายตรงข้ามเป็น 1 ใบ ใช้ได้ในเทิร์นฝ่ายเรา เลือกโปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว ทิ้งโปเกมอนนั้นและการ์ดทั้งหมดที่ติดอยู่ที่ตำแหน่งทิ้งการ์ด {ในระหว่างการแบตเทิล ฝ่ายเราใช้พลัง【VSTAR】ได้ 1 ครั้งเท่านั้น}"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "終極衝擊",
			th: "กีก้าอิมแพค"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้"
		},

		damage: 230,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "F"
}

export default card