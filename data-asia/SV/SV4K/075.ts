import { Card } from "../../../interfaces"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		ja: "ダストダス",
		th: "ดัสต์ดาส"
	},

	illustrator: "Shinya Komatsu",
	category: "Pokemon",
	dexId: [569],
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "右腕から 出す 毒液は 弱った 生物が 浴びれば 即死するほど 危険な シロモノ。",
		th: "ของเหลวพิษที่ออกมาจากแขนขวา ถ้าสิ่งมีชีวิตที่อ่อนแอโดนเข้าไปล่ะก็อันตรายถึงตายในทันที"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "なげすて",
			th: "ปาทิ้ง"
		},

		damage: "50×",

		effect: {
			ja: "自分の手札から「ポケモンのどうぐ」を好きなだけトラッシュし、その枚数×50ダメージ。",
			th: "ทิ้งการ์ด [ไอเท็มติดโปเกมอน] จากบนมือฝ่ายเราตามจำนวนที่ชอบที่ตำแหน่งทิ้งการ์ด แดเมจจะเท่ากับจำนวนการ์ดนั้น x50"
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			ja: "ベノムヒット",
			th: "เวนอมฮิต"
		},

		damage: 80,

		effect: {
			ja: "相手のバトルポケモンをどくにする。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ]"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 741420
	}
}

export default card