import { Card } from "models/database/card"
import Set from "../SV5a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "イーユイ",
		'zh-tw': "古玉魚",
		'th-th': "อวี้อวี๋"
	},

	illustrator: "Oku",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [1004],
	hp: 110,
	types: ["Fire"],

	description: {
		'ja-jp': "多くの 争いの 火種となった 勾玉に 集まった 妬みが 炎を まとい ポケモンとなった。",
		'zh-tw': "曾引起無數鬥爭的勾玉聚集了 嫉妒之情。這些嫉妒之情 纏繞了火焰，變成了寶可夢。",
		'th-th': "ความริษยาที่สะสมอยู่ในมากาทามะที่เป็นต้นเหตุของความขัดแย้งมากมายถูกห่อหุ้มด้วยเปลวเพลิง จนกลายเป็นโปเกมอน"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "ひきつける",
			'zh-tw': "吸引",
			'th-th': "ดึงดูด"
		},

		effect: {
			'ja-jp': "自分の山札を2枚引く。",
			'zh-tw': "從自己的牌庫抽出2張卡。",
			'th-th': "จั่วการ์ด 2 ใบจากสำรับการ์ดฝ่ายเรา"
		}
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			'ja-jp': "グラウンドメルト",
			'zh-tw': "大地熔化",
			'th-th': "กราวนด์เมลต์"
		},

		damage: "60+",

		effect: {
			'ja-jp': "場にスタジアムが出ているなら、60ダメージ追加。その後、そのスタジアムをトラッシュする。",
			'zh-tw': "若場上有競技場卡，則增加60點傷害。然後，將那張競技場卡丟棄。",
			'th-th': "ถ้ามีการ์ดสเตเดียมอยู่บนกระดาน การโจมตีนี้จะเพิ่มแดเมจอีก 60 หลังจากนั้น ทิ้งการ์ดสเตเดียมนั้นที่ตำแหน่งทิ้งการ์ด"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 761478,
				tcgplayer: 566073,
			},
		},
	],

	retreat: 1,
	regulationMark: "H"
}

export default card