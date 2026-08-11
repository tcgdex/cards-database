import { Card } from "models/database/card"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "バンギラスex",
		'zh-tw': "班基拉斯ex",
		'th-th': "บันกิราสex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 340,
	types: ["Lightning"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'ja-jp': "やまとばし",
			'zh-tw': "飛山",
			'th-th': "ปาภูเขา"
		},

		damage: 120,

		effect: {
			'ja-jp': "自分の山札を上から2枚トラッシュする。",
			'zh-tw': "將自己的牌庫上方2張卡丟棄。",
			'th-th': "ทิ้งการ์ด 2 ใบจากด้านบนของสำรับการ์ดฝ่ายเราที่ตำแหน่งทิ้งการ์ด"
		}
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			'ja-jp': "トールランページ",
			'zh-tw': "索爾亂暴",
			'th-th': "ธอร์แผลงฤทธิ์"
		},

		damage: "150+",

		effect: {
			'ja-jp': "自分のベンチポケモンにダメカンがのっているなら、100ダメージ追加。",
			'zh-tw': "若自己的備戰寶可夢身上放置有傷害指示物，則增加100點傷害。",
			'th-th': "ถ้าโปเกมอนบนเบนช์ฝ่ายเรามีตัวนับแดเมจวางอยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 100"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 724978,
				tcgplayer: 567076,
			},
		},
	],

	retreat: 4,
	regulationMark: "G",
}

export default card