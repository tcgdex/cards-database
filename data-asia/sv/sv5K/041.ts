import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "セキタンザン",
		'zh-tw': "巨炭山",
		th: "เซคิทันซัง",
		'zh-cn': "巨炭山"
	},

	illustrator: "Shiburingaru",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [839],
	hp: 180,
	types: ["Fighting"],

	description: {
		ja: "体を 大きく 振り動かし 燃え上がる 背中から 石炭を あたりに ばら撒いて 威嚇する。",
		'zh-tw': "會大幅晃動身體，好讓自己可以從熊熊燃燒的背部 往四處噴灑煤炭來威嚇對手。",
		th: "เขย่าร่างกายอย่างแรงให้ถ่านหินที่ลุกไหม้บนหลังกระจายไปรอบ ๆ เพื่อข่มขวัญ",
		'zh-cn': "會大幅晃動身體，好讓自己可以從熊熊燃燒的背部 往四處噴灑煤炭來威嚇對手。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "ガトリングタール",
			'zh-tw': "機槍瀝青",
			th: "ปืนกลน้ำมันดิน",
			'zh-cn': "機槍瀝青"
		},

		damage: "40+",

		effect: {
			ja: "このポケモンについているエネルギーの数×80ダメージ追加。",
			'zh-tw': "增加這隻寶可夢身上附加的【火】能量的數量×80點傷害。",
			th: "แดเมจจะเพิ่มตามจำนวนพลังงาน[ไฟ]ที่ติดอยู่กับโปเกมอนนี้ x80",
			'zh-cn': "增加這隻寶可夢身上附加的【火】能量的數量×80點傷害。"
		}
	}, {
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"],

		name: {
			ja: "やまなだれ",
			'zh-tw': "山崩",
			th: "เขาถล่ม",
			'zh-cn': "山崩"
		},

		damage: 150,

		effect: {
			ja: "相手の山札を上から2枚トラッシュする。",
			'zh-tw': "將對手的牌庫上方2張卡丟棄。",
			th: "ทิ้งการ์ด 2 ใบจากด้านบนของสำรับการ์ดฝ่ายตรงข้ามที่ตำแหน่งทิ้งการ์ด",
			'zh-cn': "將對手的牌庫上方2張卡丟棄。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "H"
}

export default card