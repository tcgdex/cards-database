import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "ホゲータ",
		'zh-tw': "呆火鱷",
		th: "โฮเกเตอร์",
		id: "Fuecoco"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	dexId: [909],
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "温かい 岩の上で 寝転び 四角い うろこから 取り込んだ 熱で 炎エネルギーを 作る。",
		'zh-tw': "會躺在溫熱的岩石上，用四角形的鱗片所吸收的 熱能來製造火之能量。",
		th: "นอนเกลือกกลิ้งอยู่บนหินอุ่น สร้างพลังงานไฟด้วยความร้อนที่ดูดซับเข้ามาด้วยเกล็ดสี่เหลี่ยม",
		id: "Fuecoco berbaring di atas batu hangat dan menciptakan energi api dengan menyerap energi panas tersebut menggunakan sisik perseginya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "たいあたり",
			'zh-tw': "撞擊",
			th: "พุ่งเข้าชน",
			id: "Serudukan"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card