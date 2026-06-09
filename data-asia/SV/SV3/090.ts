import { Card } from "../../../interfaces"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		ja: "ガルーラ",
		'zh-tw': "袋獸",
		th: "การูรา"
	},

	illustrator: "Yuya Oka",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [115],
	hp: 130,
	types: ["Colorless"],

	description: {
		ja: "子どもの いない ガルーラが 遭難した 人間の 子を 育てていたという 記録がある。",
		'zh-tw': "紀錄中記載著，曾經有沒孩子的袋獸養育了遇難的人類孩子。",
		th: "มีการบันทึกไว้ว่า การูราที่ไม่มีลูกเป็นของตัวเองนั้นเคยให้การเลี้ยงดูลูกของมนุษย์ที่หลงทางเข้ามา"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ずつき",
			'zh-tw': "頭錘",
			th: "พุ่งหัวชน"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "スパイクドロー",
			'zh-tw': "扣殺抽出",
			th: "สไปค์ดรอว์"
		},

		damage: 60,

		effect: {
			ja: "自分の山札を2枚引く。",
			'zh-tw': "從自己的牌庫抽出2張卡。",
			th: "จั่วการ์ด 2 ใบจากสำรับการ์ดฝ่ายเรา"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 724044
	}
}

export default card