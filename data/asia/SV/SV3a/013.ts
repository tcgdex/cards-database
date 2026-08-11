import { Card } from "models/database/card"
import Set from "../SV3a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ランターン",
		'zh-tw': "電燈怪",
		'th-th': "แลนเทอร์น"
	},

	illustrator: "aspara",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [171],
	hp: 120,
	types: ["Lightning"],

	description: {
		'ja-jp': "強い 光を 放ち 獲物の 目を 眩ませる。 隙が できたら 電撃を おみまいする。",
		'zh-tw': "發出強光讓獵物暫時失明。趁獵物露出破綻時， 用電擊招呼對手。",
		'th-th': "ปล่อยแสงสว่างจ้าออกมาทำให้ตาของเหยื่อพร่ามัว แล้วใช้โอกาสช่วงนั้นปล่อยไฟฟ้าเข้าโจมตี"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "ピッカリだま",
			'zh-tw': "光彈",
			'th-th': "ลูกกลมเจิดจ้า"
		},

		damage: 50
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'ja-jp': "アクアスパーク",
			'zh-tw': "水流電光",
			'th-th': "อควาสปาร์ก"
		},

		damage: "80+",

		effect: {
			'ja-jp': "このポケモンにエネルギーがついているなら、120ダメージ追加。",
			'zh-tw': "若這隻寶可夢身上附有【水】能量，則增加120點傷害。",
			'th-th': "ถ้าโปเกมอนนี้มีพลังงาน[น้ำ]ติดอยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 120"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 734252,
				tcgplayer: 566871,
			},
		},
	],

	retreat: 2,
	regulationMark: "G",
}

export default card