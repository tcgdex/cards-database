import { Card } from "models/database/card"
import Set from "../SV3a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ゴース",
		'zh-tw': "鬼斯",
		'th-th': "โกส"
	},

	illustrator: "Nobuhiro Imagawa",
	rarity: "Common",
	category: "Pokemon",
	dexId: [92],
	hp: 50,
	types: ["Darkness"],

	description: {
		'ja-jp': "ガス状の 体で まとわりつき 獲物の 皮膚から 少しずつ 毒を 送り込んで 弱らせる。",
		'zh-tw': "會用氣體狀的身體纏住獵物，再從皮膚緩緩地注入毒素， 使對手變得虛弱。",
		'th-th': "ใช้ร่างกายที่เป็นแก๊สเกาะติดเหยื่อแล้วค่อย ๆ ส่งพิษผ่านเข้าผิวหนังไปทีละนิดจนเหยื่ออ่อนแอลง"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "ひきつける",
			'zh-tw': "吸引",
			'th-th': "ยั่วยวน"
		},

		effect: {
			'ja-jp': "自分の山札を1枚引く。",
			'zh-tw': "從自己的牌庫抽出1張卡。",
			'th-th': "จั่วการ์ด 1 ใบจากสำรับการ์ดฝ่ายเรา"
		}
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			'ja-jp': "おにび",
			'zh-tw': "鬼火",
			'th-th': "ลูกไฟวิญญาณ"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 734272,
				tcgplayer: 566891,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card