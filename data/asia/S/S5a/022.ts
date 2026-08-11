import { Card } from "../../../interfaces"
import Set from "../S5a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雷電雲",
		th: "โวลโทลอส"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		'zh-tw': "一邊在空中飛來飛去，一邊四處打雷引發森林大火，因此受到厭惡。",
		th: "เป็นที่รังเกียจเพราะบินวนไปมาบนฟ้าปล่อยสายฟ้าตามที่ต่าง ๆ จนเกิดไฟไหม้ป่า"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "輔助電光",
			th: "แอสซิสต์สปาร์ก"
		},

		effect: {
			'zh-tw': "若希望，從自己的手牌選擇1張【雷】能量卡，附於備戰寶可夢身上。",
			th: "หากต้องการ เลือกการ์ดพลังงาน [สายฟ้า] 1 ใบจากการ์ดบนมือฝ่ายเรา ติดที่โปเกมอนบนเบนช์"
		},

		damage: 30,
		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "打雷",
			th: "ฟ้าผ่า"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到30點傷害。",
			th: "โปเกมอนตัวนี้ก็จะได้รับแดเมจ 30 ด้วย"
		},

		damage: 130,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card