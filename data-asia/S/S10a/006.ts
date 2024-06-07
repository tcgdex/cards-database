import { Card } from "../../../interfaces"
import Set from "../S10a"

const card: Card = {
	set: Set,

	name: {
		th: "อาเกฮันท์",
		'zh-tw': "狩獵鳳蝶"
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		th: "จะแทงปากอันเรียวเล็กไปที่ฝ่ายตรงข้าม และดูดเอาของเหลวในร่างกายออกมา มีนิสัยก้าวร้าว",
		'zh-tw': "會用細長的嘴刺向對手，吸取對手的體液。 具有很強的攻擊性。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			th: "หลอดดูดคึกคัก",
			'zh-tw': "洋洋吸管"
		},

		effect: {
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา จั่วการ์ดจากสำรับการ์ด จนได้การ์ดบนมือฝ่ายเราเป็น 6 ใบ",
			'zh-tw': "在自己的回合時，可使用1次。從牌庫抽卡直到自己的手牌滿6張為止。"
		}
	}],

	attacks: [{
		name: {
			th: "เมกาเดรน",
			'zh-tw': "超級吸取"
		},

		effect: {
			th: "ฟื้นฟู HP ของโปเกมอนนี้ [30]",
			'zh-tw': "將這隻寶可夢恢復「30」HP。"
		},

		damage: 70,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card