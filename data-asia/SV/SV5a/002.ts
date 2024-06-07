import { Card } from "../../../interfaces"
import Set from "../SV5a"

const card: Card = {
	set: Set,

	name: {
		ja: "モジャンボ",
		'zh-tw': "巨蔓藤",
		th: "โมจัมโบ"
	},

	illustrator: "LINNE",
	rarity: "Common",
	category: "Pokemon",
	dexId: [465],
	hp: 150,
	types: ["Grass"],

	description: {
		ja: "自在に 伸びる ２本の 腕は じつは ツルが 束になったものと 最近の 研究で わかった。",
		'zh-tw': "最近的研究發現，牠這雙能夠自由伸縮的手臂其實 是由成束的藤蔓形成的。",
		th: "จากงานวิจัยล่าสุดพบว่า แขน 2 ข้างที่ยืดยาวได้อย่างอิสระนั้น ที่จริงแล้วคือเถาวัลย์ที่มัดติดกันอยู่นั่นเอง"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "みつりんボディ",
			'zh-tw': "密林之軀",
			th: "ร่างป่าดงดิบ"
		},

		effect: {
			ja: "このポケモンが受けるワザのダメージは「-30」される。",
			'zh-tw': "這隻寶可夢受到招式的傷害「-30」點。",
			th: "แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับจะถูก [-30]"
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			ja: "おおいかぶさる",
			'zh-tw': "覆蓋",
			th: "แผ่ปกคลุม"
		},

		damage: "150-",

		effect: {
			ja: "このポケモンにのっているダメカンの数×10ダメージぶん、このワザのダメージは小さくなる。",
			'zh-tw': "減少這隻寶可夢身上放置的傷害指示物的數量×10點傷害。",
			th: "แดเมจของท่าต่อสู้นี้จะลดลง ตามจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนนี้ x10"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "H"
}

export default card