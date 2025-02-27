import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "モルペコ",
		id: "Morpeko",
		th: "โมรุเปโกะ",
		'zh-tw': "莫魯貝可",
		'zh-cn': "莫魯貝可"
	},

	illustrator: "Cona Nitanda",
	rarity: "None",
	category: "Pokemon",
	dexId: [877],
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "空腹ホルモンで 性質が 変化。 お腹が 満たされるまで 悪の 限りを つくす。",
		id: "Sifat Morpeko berubah akibat hormon lapar. Pokémon ini mengamuk bagai makhluk kegelapan hingga perutnya kenyang.",
		th: "นิสัยจะเปลี่ยนเพราะฮอร์โมนที่ออกมาตอนท้องว่าง จะทำความชั่วร้ายจนถึงขีดสุดจนกว่าท้องมันจะอิ่ม",
		'zh-tw': "饑餓荷爾蒙改變了牠的性情。 牠會做盡一切的壞事， 直到把肚子填飽為止。",
		'zh-cn': "饑餓荷爾蒙改變了牠的性情。 牠會做盡一切的壞事， 直到把肚子填飽為止。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "はらへりダッシュ",
			id: "Lari Kencang Perut Lapar",
			th: "ท้องกิ่วพุ่งพรวด",
			'zh-tw': "飢餓衝刺",
			'zh-cn': "飢餓衝刺"
		},

		effect: {
			ja: "このポケモンにエネルギーがついていないなら、このポケモンのにげるためのエネルギーは、すべてなくなる。",
			id: "Jika Pokémon ini tidak mengenakan Energi, Pokémon ini menjadi tidak membutuhkan Energi untuk Mundur.",
			th: "ถ้าโปเกมอนนี้ไม่มีพลังงานติดอยู่ พลังงานสำหรับ[หนี]ของโปเกมอนนี้ ทั้งหมดจะหายไป",
			'zh-tw': "若這隻寶可夢身上沒有附加能量卡，則這隻寶可夢【撤退】所需的能量全部消除。",
			'zh-cn': "若這隻寶可夢身上沒有附加能量卡，則這隻寶可夢【撤退】所需的能量全部消除。"
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			ja: "エネしゃりん",
			id: "Roda Energi",
			th: "กงล้อพลังงาน",
			'zh-tw': "能量車輪",
			'zh-cn': "能量車輪"
		},

		damage: 70,

		effect: {
			ja: "このポケモンについているエネルギーを2個選び、ベンチポケモン1匹につけ替える。",
			id: "Pilih 2 Energi {Kegelapan} yang dikenakan pada Pokémon ini, lalu pindahkan ke 1 Pokémon Cadangan.",
			th: "เลือกพลังงาน[ความมืด]ที่ติดอยู่กับโปเกมอนนี้ 2 ลูก ย้ายไปติดกับโปเกมอนบนเบนช์ 1 ตัว",
			'zh-tw': "選擇2個這隻寶可夢身上附加的【惡】能量，改附於1隻備戰寶可夢身上。",
			'zh-cn': "選擇2個這隻寶可夢身上附加的【惡】能量，改附於1隻備戰寶可夢身上。"
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