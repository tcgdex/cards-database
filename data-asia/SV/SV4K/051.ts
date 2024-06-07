import { Card } from "../../../interfaces"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		ja: "モルペコ",
		'zh-tw': "莫魯貝可",
		th: "โมรุเปโกะ"
	},

	illustrator: "Cona Nitanda",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [877],
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "空腹ホルモンで 性質が 変化。 お腹が 満たされるまで 悪の 限りを つくす。",
		'zh-tw': "饑餓荷爾蒙改變了牠的性情。牠會做盡一切的壞事， 直到把肚子填飽為止。",
		th: "นิสัยจะเปลี่ยนเพราะฮอร์โมนที่ออกมาตอนท้องว่าง จะทำความชั่วร้ายจนถึงขีดสุดจนกว่าท้องมันจะอิ่ม"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "はらへりダッシュ",
			'zh-tw': "飢餓衝刺",
			th: "ท้องกิ่วพุ่งพรวด"
		},

		effect: {
			ja: "このポケモンにエネルギーがついていないなら、このポケモンのにげるためのエネルギーは、すべてなくなる。",
			'zh-tw': "若這隻寶可夢身上沒有附加能量卡，則這隻寶可夢【撤退】所需的能量全部消除。",
			th: "ถ้าโปเกมอนนี้ไม่มีพลังงานติดอยู่ พลังงานสำหรับ[หนี]ของโปเกมอนนี้ ทั้งหมดจะหายไป"
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			ja: "エネしゃりん",
			'zh-tw': "能量車輪",
			th: "กงล้อพลังงาน"
		},

		damage: 70,

		effect: {
			ja: "このポケモンについているエネルギーを2個選び、ベンチポケモン1匹につけ替える。",
			'zh-tw': "選擇2個這隻寶可夢身上附加的【惡】能量，改附於1隻備戰寶可夢身上。",
			th: "เลือกพลังงาน[ความมืด]ที่ติดอยู่กับโปเกมอนนี้ 2 ลูก ย้ายไปติดกับโปเกมอนบนเบนช์ 1 ตัว"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card