import { Card } from "models/database/card"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "マラカッチ",
		'zh-tw': "沙鈴仙人掌",
		'th-th': "มาราคัจจิ",
		'ko-kr': "마라카치"
	},

	illustrator: "Masako Tomii",
	rarity: "Common",
	category: "Pokemon",
	dexId: [556],
	hp: 110,
	types: ["Grass"],

	description: {
		'ja-jp': "１年に 一度 種を まく。 花の 種は 栄養満点で 砂漠の 貴重な 食料。",
		'zh-tw': "一年散播一次種子。花的種子營養十足， 是沙漠中貴重的食糧。",
		'th-th': "โปรยเมล็ดปีละครั้ง เมล็ดดอกไม้มีสารอาหารเต็มเปี่ยมและเป็นแหล่งอาหารอันมีค่าในทะเลทราย",
		'ko-kr': "일 년에 한 번 씨를 뿌린다. 꽃의 씨는 영양이 매우 풍부해 사막의 귀중한 식량이다."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "ダブルドロー",
			'zh-tw': "雙重抽出",
			'th-th': "ดับเบิลดรอว์",
			'ko-kr': "더블드로"
		},

		effect: {
			'ja-jp': "自分の山札を2枚引く。",
			'zh-tw': "從自己的牌庫抽出2張卡。",
			'th-th': "จั่วการ์ด 2 ใบจากสำรับการ์ดฝ่ายเรา",
			'ko-kr': "자신의 덱을 2장 뽑는다."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'ja-jp': "ミサイルばり",
			'zh-tw': "飛彈針",
			'th-th': "มิสไซล์เข็ม",
			'ko-kr': "바늘미사일"
		},

		damage: "30×",

		effect: {
			'ja-jp': "コインを4回投げ、オモテの数×30ダメージ。",
			'zh-tw': "擲4次硬幣，造成正面出現的次數×30點傷害。",
			'th-th': "ทอยเหรียญ 4 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x30",
			'ko-kr': "동전을 4번 던져서 앞면이 나온 수 × 30데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 741198,
				tcgplayer: 565758,
			},
		},
	],

	retreat: 2,
	regulationMark: "G",
}

export default card