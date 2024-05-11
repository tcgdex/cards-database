import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "光輝噴火龍",
		th: "เรเดียนต์ลิซาร์ดอน"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 160,
	types: ["Fire"],

	description: {
		'zh-tw': "會噴出彷彿連岩石都能燒焦的灼熱火焰。 有時會引發森林火災。",
		th: "พ่นไฟอันร้อนแรงพอที่จะแผดเผาหินได้ บางครั้งก็ทำให้เกิดไฟป่า"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "激動之心",
			th: "เอ็กซ์ไซต์ฮาร์ต"
		},

		effect: {
			'zh-tw': "這隻寶可夢使用招式所需的【無】能量，減少對手已經獲得的獎賞卡的張數數量。",
			th: "พลังงาน[ไร้สี]ที่จำเป็นสำหรับใช้ท่าต่อสู้ของโปเกมอนนี้จะลดลง ตามจำนวนการ์ดรางวัลที่ฝ่ายตรงข้ามหยิบไปแล้ว"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "烈焰爆",
			th: "เปลวเพลิงปะทุ"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「烈焰爆」。",
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ [เปลวเพลิงปะทุ] ไม่ได้"
		},

		damage: 250,
		cost: ["Fire", "Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card