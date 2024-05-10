import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "ダストダス",
		'zh-tw': "灰塵山",
		th: "ดัสต์ดาส"
	},

	illustrator: "Aya Kusube",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [569],
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "右腕から 出す 毒液は 弱った 生物が 浴びれば 即死するほど 危険な シロモノ。",
		'zh-tw': "從右臂噴出的毒液十分危險，虛弱的生物只要一沾到， 立刻就會丟掉性命。",
		th: "ของเหลวพิษที่ออกมาจากแขนขวา ถ้าสิ่งมีชีวิตที่อ่อนแอโดนเข้าไปล่ะก็อันตรายถึงตายในทันที"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "なげすて",
			'zh-tw': "丟棄",
			th: "ปาทิ้ง"
		},

		damage: "50×",

		effect: {
			ja: "自分の手札から「ポケモンのどうぐ」を好きなだけトラッシュし、その枚数×50ダメージ。",
			'zh-tw': "從自己的手牌將任意數量的「寶可夢道具」卡丟棄，造成其張數×50點傷害。",
			th: "ทิ้งการ์ด [ไอเท็มติดโปเกมอน] จากบนมือฝ่ายเราตามจำนวนที่ชอบที่ตำแหน่งทิ้งการ์ด แดเมจจะเท่ากับจำนวนการ์ดนั้น x50"
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			ja: "ベノムヒット",
			'zh-tw': "毒液一擊",
			th: "เวนอมฮิต"
		},

		damage: 80,

		effect: {
			ja: "相手のバトルポケモンをどくにする。",
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ]"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card