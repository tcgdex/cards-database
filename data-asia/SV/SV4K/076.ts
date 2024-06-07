import { Card } from "../../../interfaces"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		ja: "モルペコ",
		th: "โมรุเปโกะ"
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",
	dexId: [877],
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "空腹ホルモンで 性質が 変化。 お腹が 満たされるまで 悪の 限りを つくす。",
		th: "นิสัยจะเปลี่ยนเพราะฮอร์โมนที่ออกมาตอนท้องว่าง จะทำความชั่วร้ายจนถึงขีดสุดจนกว่าท้องมันจะอิ่ม"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "はらへりダッシュ",
			th: "ท้องกิ่วพุ่งพรวด"
		},

		effect: {
			ja: "このポケモンにエネルギーがついていないなら、このポケモンのにげるためのエネルギーは、すべてなくなる。",
			th: "ถ้าโปเกมอนนี้ไม่มีพลังงานติดอยู่ พลังงานสำหรับ[หนี]ของโปเกมอนนี้ ทั้งหมดจะหายไป"
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			ja: "エネしゃりん",
			th: "กงล้อพลังงาน"
		},

		damage: 70,

		effect: {
			ja: "このポケモンについているエネルギーを2個選び、ベンチポケモン1匹につけ替える。",
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