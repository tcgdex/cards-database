import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "チラチーノ",
		'zh-tw': "奇諾栗鼠",
		th: "จิลาจีโน",
		'zh-cn': "奇諾栗鼠"
	},

	illustrator: "Yuu Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [573],
	hp: 110,
	types: ["Colorless"],

	description: {
		ja: "塵ひとつ 許せない 潔癖。 体から 染み出る 油を 巣に 塗りつけ コーティングする。",
		'zh-tw': "潔癖使得牠連一絲灰塵都無法容忍，會把自己身上 滲出的油塗在巢上保持清潔。",
		th: "เกลียดความสกปรกไม่ยอมให้มีฝุ่นแม้แต่นิดเดียว ทารังเพื่อเคลือบไว้ด้วยน้ำมันที่ซึมมาจากร่างกาย",
		'zh-cn': "潔癖使得牠連一絲灰塵都無法容忍，會把自己身上 滲出的油塗在巢上保持清潔。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ひっぱたく",
			'zh-tw': "重摑",
			th: "ตบแรง",
			'zh-cn': "重摑"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "スペシャルころころ",
			'zh-tw': "特殊滾滾",
			th: "กลมกลิ้งพิเศษ",
			'zh-cn': "特殊滾滾"
		},

		damage: "70×",

		effect: {
			ja: "このポケモンについている特殊エネルギーの枚数×70ダメージ。",
			'zh-tw': "造成這隻寶可夢身上附加的特殊能量卡的張數×70點傷害。",
			th: "แดเมจจะเท่ากับจำนวนการ์ดพลังงานพิเศษที่ติดอยู่กับโปเกมอนนี้ x70",
			'zh-cn': "造成這隻寶可夢身上附加的特殊能量卡的張數×70點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card