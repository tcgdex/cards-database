import { Card } from "models/database/card"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ダストダス",
		'th-th': "ดัสต์ดาส",
		'ko-kr': "더스트나"
	},

	illustrator: "Shinya Komatsu",
	category: "Pokemon",
	dexId: [569],
	hp: 120,
	types: ["Darkness"],

	description: {
		'ja-jp': "右腕から 出す 毒液は 弱った 生物が 浴びれば 即死するほど 危険な シロモノ。",
		'th-th': "ของเหลวพิษที่ออกมาจากแขนขวา ถ้าสิ่งมีชีวิตที่อ่อนแอโดนเข้าไปล่ะก็อันตรายถึงตายในทันที",
		'ko-kr': "오른팔에서 내보내는 독액은 약한 생물이 맞으면 즉사할 정도로 위험하다."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'ja-jp': "なげすて",
			'th-th': "ปาทิ้ง",
			'ko-kr': "내버리기"
		},

		damage: "50×",

		effect: {
			'ja-jp': "自分の手札から「ポケモンのどうぐ」を好きなだけトラッシュし、その枚数×50ダメージ。",
			'th-th': "ทิ้งการ์ด [ไอเท็มติดโปเกมอน] จากบนมือฝ่ายเราตามจำนวนที่ชอบที่ตำแหน่งทิ้งการ์ด แดเมจจะเท่ากับจำนวนการ์ดนั้น x50",
			'ko-kr': "자신의 패에서 「포켓몬의 도구」를 원하는 만큼 트래쉬하고 그 장수 × 50데미지를 준다."
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'ja-jp': "ベノムヒット",
			'th-th': "เวนอมฮิต",
			'ko-kr': "베놈히트"
		},

		damage: 80,

		effect: {
			'ja-jp': "相手のバトルポケモンをどくにする。",
			'th-th': "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ]",
			'ko-kr': "상대의 배틀 포켓몬을 독으로 만든다."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 741483,
				tcgplayer: 565830,
			},
		},
	],

	retreat: 3,
	regulationMark: "G",
}

export default card