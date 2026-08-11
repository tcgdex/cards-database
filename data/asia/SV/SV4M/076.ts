import { Card } from "models/database/card"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "チルット",
		'th-th': "ทิลท์โท",
		'ko-kr': "파비코"
	},

	illustrator: "Jiro Sasumo",
	category: "Pokemon",
	dexId: [333],
	hp: 50,
	types: ["Colorless"],

	description: {
		'ja-jp': "自分も まわりも きれいでないと 落ち着かない 性格。 汚れを 見つけると 羽で ふき取る。",
		'th-th': "ถ้าตัวเองและรอบข้างไม่สะอาดจะรู้สึกกระสับกระส่าย พอเจอสิ่งสกปรกจะใช้ปีกเช็ด",
		'ko-kr': "자신도 주변도 깨끗하지 않으면 진정되지 않는 성격이다. 더러운 것을 발견하면 날개로 닦는다."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "つつく",
			'th-th': "จิก",
			'ko-kr': "쪼기"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "きずをなおす",
			'th-th': "รักษาบาดแผล",
			'ko-kr': "상처치료"
		},

		effect: {
			'ja-jp': "自分のポケモン1匹のHPを「30」回復する。",
			'th-th': "ฟื้นฟู HP ของโปเกมอนฝ่ายเรา 1 ตัว [30]"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 741903,
				tcgplayer: 566036,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card