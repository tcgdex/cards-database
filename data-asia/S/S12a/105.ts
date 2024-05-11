import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "拉帝亞斯",
		th: "ลาทิอาส"
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],

	description: {
		'zh-tw': "透過心靈感應和人類交流情感。會用能令光線折射的羽毛 變化成其他的樣子。",
		th: "ใช้พลังจิตสื่อความรู้สึกกับมนุษย์ จะเปลี่ยนเป็นรูปร่างอื่นด้วยขนปีกที่ทำให้แสงหักเห"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "紅色支援",
			th: "เรดแอสซิสต์"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。從自己的手牌選擇1張【超】能量卡，附於自己的「拉帝歐斯」身上。",
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เลือกการ์ดพลังงาน [พลังจิต] 1 ใบจากบนมือฝ่ายเรา ติดที่ [ลาทิโอส] ฝ่ายเรา"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "力之屏障",
			th: "ไดนาบาเรีย"
		},

		effect: {
			'zh-tw': "在下個對手的回合，這隻寶可夢不會受到「寶可夢【VMAX】」招式的傷害。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนนี้จะไม่ได้รับแดเมจจากท่าต่อสู้ของ [โปเกมอน [VMAX]]"
		},

		damage: 70,
		cost: ["Fire", "Psychic", "Colorless"]
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card