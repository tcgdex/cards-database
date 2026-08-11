import { Card } from "models/database/card"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "チルット",
		'zh-tw': "青綿鳥",
		'th-th': "ทิลท์โท",
		'ko-kr': "파비코"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Common",
	category: "Pokemon",
	dexId: [333],
	hp: 50,
	types: ["Colorless"],

	description: {
		'ja-jp': "自分も まわりも きれいでないと 落ち着かない 性格。 汚れを 見つけると 羽で ふき取る。",
		'zh-tw': "如果自己和周圍不乾淨，就靜不下心來的性格。見到髒污會用羽毛擦掉。",
		'th-th': "ถ้าตัวเองและรอบข้างไม่สะอาดจะรู้สึกกระสับกระส่าย พอเจอสิ่งสกปรกจะใช้ปีกเช็ด",
		'ko-kr': "자신도 주변도 깨끗하지 않으면 진정되지 않는 성격이다. 더러운 것을 발견하면 날개로 닦는다."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "つつく",
			'zh-tw': "啄",
			'th-th': "จิก",
			'ko-kr': "쪼기"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "きずをなおす",
			'zh-tw': "療傷",
			'th-th': "รักษาบาดแผล",
			'ko-kr': "상처치료"
		},

		effect: {
			'ja-jp': "自分のポケモン1匹のHPを「30」回復する。",
			'zh-tw': "將自己的1隻寶可夢恢復「30」HP。",
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
			type: "normal",
			thirdParty: {
				cardmarket: 741881,
				tcgplayer: 566014,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card