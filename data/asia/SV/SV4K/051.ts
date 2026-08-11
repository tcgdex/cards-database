import { Card } from "models/database/card"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "モルペコ",
		'zh-tw': "莫魯貝可",
		'th-th': "โมรุเปโกะ",
		'ko-kr': "모르페코"
	},

	illustrator: "Cona Nitanda",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [877],
	hp: 70,
	types: ["Darkness"],

	description: {
		'ja-jp': "空腹ホルモンで 性質が 変化。 お腹が 満たされるまで 悪の 限りを つくす。",
		'zh-tw': "饑餓荷爾蒙改變了牠的性情。牠會做盡一切的壞事， 直到把肚子填飽為止。",
		'th-th': "นิสัยจะเปลี่ยนเพราะฮอร์โมนที่ออกมาตอนท้องว่าง จะทำความชั่วร้ายจนถึงขีดสุดจนกว่าท้องมันจะอิ่ม",
		'ko-kr': "공복 호르몬으로 성질이 변한다. 배가 채워질 때까지 온갖 못된 짓을 한다."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "はらへりダッシュ",
			'zh-tw': "飢餓衝刺",
			'th-th': "ท้องกิ่วพุ่งพรวด",
			'ko-kr': "배고픈 대시"
		},

		effect: {
			'ja-jp': "このポケモンにエネルギーがついていないなら、このポケモンのにげるためのエネルギーは、すべてなくなる。",
			'zh-tw': "若這隻寶可夢身上沒有附加能量卡，則這隻寶可夢【撤退】所需的能量全部消除。",
			'th-th': "ถ้าโปเกมอนนี้ไม่มีพลังงานติดอยู่ พลังงานสำหรับ[หนี]ของโปเกมอนนี้ ทั้งหมดจะหายไป",
			'ko-kr': "이 포켓몬에게 에너지가 붙어 있지 않다면 이 포켓몬의 후퇴에 필요한 에너지는 모두 없어진다."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			'ja-jp': "エネしゃりん",
			'zh-tw': "能量車輪",
			'th-th': "กงล้อพลังงาน",
			'ko-kr': "에너지차륜"
		},

		damage: 70,

		effect: {
			'ja-jp': "このポケモンについているエネルギーを2個選び、ベンチポケモン1匹につけ替える。",
			'zh-tw': "選擇2個這隻寶可夢身上附加的【惡】能量，改附於1隻備戰寶可夢身上。",
			'th-th': "เลือกพลังงาน[ความมืด]ที่ติดอยู่กับโปเกมอนนี้ 2 ลูก ย้ายไปติดกับโปเกมอนบนเบนช์ 1 ตัว",
			'ko-kr': "이 포켓몬에게 붙어 있는 (악) 에너지를 2개 선택해서 벤치 포켓몬 1마리에게 붙인다."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 741421,
				tcgplayer: 565806,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card