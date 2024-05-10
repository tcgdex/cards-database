import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "イルカマン",
		'zh-tw': "海豚俠",
		th: "อิรุกะแมน",
		'zh-cn': "海豚俠"
	},

	illustrator: "DOM",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [964],
	hp: 150,
	types: ["Water"],

	description: {
		ja: "太古の 遺伝子が 覚醒。 片ヒレで クルーズ船を 軽々 持ち上げる 怪力の 持ち主。",
		'zh-tw': "太古基因覺醒之後的樣子。力氣很大，只用單邊的鰭 也可以輕輕鬆鬆舉起遊輪。",
		th: "พันธุกรรมโบราณถูกปลุกขึ้นมา มีพละกำลังมหาศาลที่สามารถยกเรือสำราญได้อย่างสบาย ๆ ด้วยครีบเพียงข้างเดียว",
		'zh-cn': "太古基因覺醒之後的樣子。力氣很大，只用單邊的鰭 也可以輕輕鬆鬆舉起遊輪。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "ヴァンガードパンチ",
			'zh-tw': "先鋒拳",
			th: "แวนการ์ดพันช์",
			'zh-cn': "先鋒拳"
		},

		damage: 130,

		effect: {
			ja: "このポケモンにも、このポケモンにのっているダメカンの数×10ダメージ。",
			'zh-tw': "這隻寶可夢也受到這隻寶可夢身上放置的傷害指示物的數量×10點傷害。",
			th: "โปเกมอนนี้ก็ จะได้รับแดเมจเท่ากับจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนนี้ x10 ด้วย",
			'zh-cn': "這隻寶可夢也受到這隻寶可夢身上放置的傷害指示物的數量×10點傷害。"
		}
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "ダブルアタック",
			'zh-tw': "二連擊",
			th: "ดับเบิลแอทแทก",
			'zh-cn': "二連擊"
		},

		damage: "90×",

		effect: {
			ja: "コインを2回投げ、オモテの数×90ダメージ。",
			'zh-tw': "擲2次硬幣，造成正面出現的次數×90點傷害。",
			th: "ทอยเหรียญ 2 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x90",
			'zh-cn': "擲2次硬幣，造成正面出現的次數×90點傷害。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card