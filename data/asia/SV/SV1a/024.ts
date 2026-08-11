import { Card } from "models/database/card"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "デリバード",
		'zh-tw': "信使鳥",
		'th-th': "เดลิเบิร์ด",
		'id-id': "Delibird"
	},

	illustrator: "miki kudo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [225],
	hp: 90,
	types: ["Water"],

	description: {
		'ja-jp': "１日 ずっと エサを運んでる。 遭難した 人が デリバードの エサで 助かった 話もある。",
		'zh-tw': "一整天都在搬運食物。據說曾經有遇難的人因為 信使鳥的食物而得救。",
		'th-th': "ลำเลียงอาหารตลอดทั้งวัน ว่ากันว่ามีผู้ประสบภัยที่รอดตายเพราะได้อาหารจากเดลิเบิร์ดด้วย",
		'id-id': "Delibird terus mengangkut makanan sehari penuh. Ada kisah mengenai orang yang terdampar terselamatkan berkat makanan yang dibawa olehnya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "ダブルドロー",
			'zh-tw': "雙重抽出",
			'th-th': "ดับเบิลดรอว์",
			'id-id': "Double Draw"
		},

		effect: {
			'ja-jp': "自分の山札を2枚引く。",
			'zh-tw': "從自己的牌庫抽出2張卡。",
			'th-th': "จั่วการ์ด 2 ใบจากสำรับการ์ดฝ่ายเรา",
			'id-id': "Ambil 2 kartu dari atas Deck sendiri."
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			'ja-jp': "アイスウイング",
			'zh-tw': "冰之翼",
			'th-th': "ไอซ์วิง",
			'id-id': "Ice Wing"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 701078,
				tcgplayer: 568147,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card