import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "章魚桶",
		th: "ออคตัน"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		'zh-tw': "有著堅硬結實的腦袋。會用帶有吸盤的腳纏住對手，然後不停地用頭猛撞。",
		th: "มีหัวแข็งแรงเหมือนก้อนหิน พันด้วยขาที่มีปุ่มดูดแล้วใช้หัวทุบตีแบบไม่ยั้ง"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "連擊搜索",
			th: "ค้นหาจู่โจมต่อเนื่อง"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。從自己的牌庫選擇1張「連擊」卡，在給對手看過後加入手牌。並且重洗牌庫。在這個回合，若已經使出了其他的「連擊搜索」，則這個特性無法使用。",
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เลือกการ์ด 1 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด เทิร์นนี้ ถ้าใช้ [ค้นหาจู่โจมต่อเนื่อง] ใบอื่นไปแล้ว จะใช้ความสามารถนี้ไม่ได้"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "攀瀑",
			th: "ปีนน้ำตก"
		},

		damage: 50,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card