import { Card } from "../../../interfaces"
import Set from "../sv5M"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "強顎雞母蟲",
		th: "อโกจิมูชิ"
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		'zh-tw': "強顎雞母蟲大大的顎部擁有能夠折斷粗壯樹枝的威力。 連天敵稚山雀都會因此逃跑。",
		th: "กรามใหญ่นั้นมีพละกำลังมหาศาลขนาดงอท่อนไม้ใหญ่จนหักได้ แม้ศัตรูคู่แค้นโคโคการะยังต้องหนี"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "群聚",
			th: "ชุมนุม"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多2張「強顎雞母蟲」，放置於備戰區。並且重洗牌庫。",
			th: "เลือกการ์ด [อโกจิมูชิ] ได้สูงสุด 2 ใบจากสำรับการ์ดฝ่ายเรา วางบนเบนช์ แล้วสับสำรับการ์ด"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "夾住",
			th: "หนีบ"
		},

		damage: 10,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card