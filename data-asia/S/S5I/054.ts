import { Card } from "../../../interfaces"
import Set from "../S5I"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "堅盾劍怪",
		th: "กิลการ์ด"
	},

	illustrator: "Naoyo Kimura",
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
			'zh-tw': "巨烈猛擊",
			th: 'กิกันต์แบช'
		},

		effect: {
			'zh-tw': "在下個對手的回合，這隻寶可夢不會受到「寶可夢【VMAX】」招式的傷害。",
			th: 'ในเทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนนี้จะไม่ได้รับแดเมจจากท่าต่อสู้ของ [โปเกมอน 【VMAX】]'
		},

		damage: 70,
		cost: ["Metal", "Colorless"]
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
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เลือก [กิลการ์ด] 1 ใบจากบนมือฝ่ายเรา สลับกับการ์ดนี้ (การ์ดที่ติดอยู่ ตัวนับแดเมจ สภาวะผิดปกติ เอฟเฟกต์ทั้งหมดยังคงอยู่ต่อไป) นำการ์ดนี้กลับขึ้นมือ",
			'zh-tw': "在自己的回合時，可使用1次。從自己的手牌選擇1張「堅盾劍怪」卡，與這張卡互換（所附加的卡・傷害指示物・特殊狀態・效果等全部保留）。將這張卡放回手牌。"
		}
	}]
}

export default card
