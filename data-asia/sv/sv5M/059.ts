import { Card } from "../../../interfaces"
import Set from "../sv5M"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "高傲雉雞",
		th: "เคนโฮโล"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],

	description: {
		'zh-tw': "擁有高度的飛行能力。雌性擅於持久， 雄性擅長速度。",
		th: "มีความสามารถในการบินสูง ตัวเมียจะมีความอึดเป็นเลิศ ในขณะที่ตัวผู้จะเหนือกว่าด้านความเร็วในการบิน"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "反轉之風",
			th: "รีเวิร์สวินด์"
		},

		effect: {
			'zh-tw': "若希望，選擇2個對手的戰鬥寶可夢身上附加的能量，放回對手的手牌。",
			th: "หากต้องการ เลือกพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม 2 ลูก นำกลับขึ้นมือฝ่ายตรงข้าม"
		},

		damage: 70,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "潛力",
			th: "พลังแฝง"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้"
		},

		damage: 180,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 0,
	regulationMark: "H"
}

export default card