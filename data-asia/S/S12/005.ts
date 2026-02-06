import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "巨蔓藤",
		th: "โมจัมโบ",
		ja: "モジャンボ"
	},

	illustrator: "zig",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],

	description: {
		'zh-tw': "最近的研究發現，牠這雙能夠自由伸縮的手臂其實 是由成束的藤蔓形成的。",
		th: "จากงานวิจัยล่าสุดพบว่า แขน 2 ข้างที่ยืดยาวได้อย่างอิสระนั้น ที่จริงแล้วคือเถาวัลย์ที่มัดติดกันอยู่นั่นเอง",
		ja: "自在に 伸びる ２本の 腕は じつは ツルが 束になったものと 最近の 研究で わかった。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "吸附青藤",
			th: "เถาวัลย์ยึดติด",
			ja: "すいつくつる"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「30」HP。",
			th: "ฟื้นฟู HP ของโปเกมอนนี้ [30]",
			ja: "このポケモンのHPを「30」回復する。"
		},

		damage: 50,
		cost: ["Grass", "Colorless"]
	}, {
		name: {
			'zh-tw': "頭突",
			th: "ตบหนัก",
			ja: "ぶちかます"
		},

		damage: 130,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [465],

	thirdParty: {
		cardmarket: 680144
	}
}

export default card