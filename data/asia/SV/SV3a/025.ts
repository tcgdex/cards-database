import { Card } from "models/database/card"
import Set from "../SV3a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ドンファン",
		'zh-tw': "頓甲",
		'th-th': "ดอนแฟน"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [232],
	hp: 150,
	types: ["Fighting"],

	description: {
		'ja-jp': "硬い 皮膚に 覆われているので 車と ぶつかっても へっちゃら。 ただし 雨には めっぽう 弱い。",
		'zh-tw': "全身包裹著堅硬的皮膚，被車撞到也是毫髮無傷。 但是對雨水卻毫無招架之力。",
		'th-th': "มีหนังแข็งหนาทั่วตัว ถึงจะชนกับรถเข้าก็ไม่สะทกสะท้าน แต่แพ้ฝนอย่างแรง"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "やまなだれ",
			'zh-tw': "山崩",
			'th-th': "เขาถล่ม"
		},

		damage: 30,

		effect: {
			'ja-jp': "相手の山札を上から2枚トラッシュする。",
			'zh-tw': "將對手的牌庫上方2張卡丟棄。",
			'th-th': "ทิ้งการ์ด 2 ใบจากด้านบนของสำรับการ์ดฝ่ายตรงข้ามที่ตำแหน่งทิ้งการ์ด"
		}
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'ja-jp': "だいかいてん",
			'zh-tw': "大迴轉",
			'th-th': "กงล้อยักษ์"
		},

		damage: 160,

		effect: {
			'ja-jp': "次の自分の番、このポケモンはワザが使えない。",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			'th-th': "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 734264,
				tcgplayer: 566883,
			},
		},
	],

	retreat: 3,
	regulationMark: "G",
}

export default card