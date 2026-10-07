import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	evolveFrom: { ja: "スナヘビ" },
	dexId: [844],
	rarity: "Rare",
	set: Set,

	name: {
		ja: "サダイジャ",
		'zh-tw': "沙螺蟒",
		th: "ซาไดจา"
	},

	illustrator: "hatachu",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "独特の とぐろの 巻き方は 砂袋の 砂を より 効率 よく 噴射 するため なのだ。",
		'zh-tw': "牠之所以會以獨特的方式盤繞自己的身體，是為了能更有效率地噴射沙囊中的沙子。",
		th: "วิธีการขดตัวที่มีเอกลักษณ์เฉพาะนั้นไว้เพื่อพ่นทรายที่อยู่ในถุงทรายให้ออกมาได้อย่างมีประสิทธิภาพดียิ่งขึ้น"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "すなたいほう",
			'zh-tw': "流沙大砲",
			th: "ปืนใหญ่ทราย"
		},

		effect: {
			ja: "自分の山札を上から6枚トラッシュし、その中にある[闘]エネルギーの枚数×60ダメージ。",
			'zh-tw': "將自己的牌庫上方6張卡丟棄，造成其中的【鬥】能量卡的張數×60點傷害。",
			th: "ทิ้งการ์ดจากด้านบนสุดของสำรับการ์ดฝ่ายเรา 6 ใบที่ตำแหน่งทิ้งการ์ด แดเมจจะเท่ากับจำนวนการ์ดพลังงาน [ต่อสู้] ในนั้น x 60"
		},

		damage: "60×",
		cost: ["Fighting"]
	}, {
		name: {
			ja: "ロケットずつき",
			'zh-tw': "火箭頭錘",
			th: "พุ่งหัวจรวด"
		},

		damage: 120,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E",
	variants: [
		{ type: "holo", thirdParty: { cardmarket: 533812, tcgplayer: 569089, cardtrader: 240057 } }
	]
}

export default card