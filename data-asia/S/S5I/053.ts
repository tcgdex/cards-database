import { Card } from "../../../interfaces"
import Set from "../S5I"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "堅盾劍怪",
		th: "กิลการ์ด"
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 150,
	types: ["Metal"],

	description: {
		'zh-tw': "雖然帶著堅盾劍怪的國王曾經支配了整個國家，最後卻被牠吸走了精氣，國家也滅亡了。",
		th: "ในอดีตกษัตริย์ที่พากิลการ์ดมาได้ครอบครองประเทศ แต่ในที่สุดก็ถูกสูบเอาพลังชีวิตไปและประเทศก็ล่มสลายไปด้วย"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "全金屬利刃",
			th: 'ฟูลเมทัลเบลด'
		},

		effect: {
			'zh-tw': "選擇2個這隻寶可夢身上附加的【鋼】能量，將其丟棄。",
			th: 'เลือกพลังงาน [โลหะ] 2 ลูกที่ติดกับโปเกมอนนี้ ทิ้งที่ตำแหน่งทิ้งการ์ด'
		},

		damage: 210,
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "E",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "戰鬥切換",
			th: "ปรับกลยุทธ์"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。從自己的手牌選擇1張「堅盾劍怪」卡，與這張卡互換（所附加的卡・傷害指示物・特殊狀態・效果等全部保留）。將這張卡放回手牌。",
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เลือก [กิลการ์ด] 1 ใบจากบนมือฝ่ายเรา สลับกับการ์ดนี้ (การ์ดที่ติดอยู่ ตัวนับแดเมจ สภาวะผิดปกติ เอฟเฟกต์ทั้งหมดยังคงอยู่ต่อไป) นำการ์ดนี้กลับขึ้นมือ"
		}
	}]
}

export default card