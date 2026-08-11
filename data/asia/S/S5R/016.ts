import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "焚焰蚣",
		th: "มารุยาคุเดะ"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		'zh-tw': "性情極具攻擊性。危險的不只是牠燒燙的身體，大大的獠牙也銳利無比。",
		th: "มีนิสัยก้าวร้าว ร่างกายที่ไหม้ก็อันตรายพอแล้ว ยังมีเขี้ยวใหญ่แหลมคมอีก"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "超頻點火",
			th: "โอเวอร์ฮีตเตอร์"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，對手的【灼傷】的寶可夢，就算在寶可夢檢查時擲的硬幣為正面，【灼傷】也不會恢復。",
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่บนกระดาน โปเกมอนที่เป็นสภาวะ [ไหม้] ของฝ่ายตรงข้าม ทุกครั้งที่ตรวจสอบโปเกมอนแม้จะทอยเหรียญได้หัว ก็ไม่หายจากสภาวะ [ไหม้]"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "爆破地獄",
			th: "เบิร์สอินเฟอร์โน"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【灼傷】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ของฝ่ายตรงข้ามเป็นสภาวะ [ไหม้]"
		},

		damage: 130,
		cost: ["Fire", "Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card