import { Card } from "models/database/card"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "エテボース",
		'zh-tw': "雙尾怪手",
		'th-th': "เอเทโบธ",
		'ko-kr': "겟핸보숭"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [424],
	hp: 100,
	types: ["Colorless"],

	description: {
		'ja-jp': "なにを するにも シッポを 使う。 ２本の シッポで 抱きしめられたら 本当に 懐かれた 証。",
		'zh-tw': "不管做什麼事都會用到尾巴。如果牠用２根尾巴抱緊你，就代表牠真的和你很親近。",
		'th-th': "ใช้หางทำทุกสิ่งทุกอย่าง ถ้ามันกอดรัดด้วยหางทั้ง 2 แสดงว่ามันรักจริง",
		'ko-kr': "무엇을 하더라도 꼬리를 사용한다. 2개의 꼬리로 껴안는다면 정말로 친밀해졌다는 증거다."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "もってくる",
			'zh-tw': "呼喚",
			'th-th': "รวบรวม",
			'ko-kr': "가져오기"
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
			'ja-jp': "ハンドスリング",
			'zh-tw': "手之吊懸",
			'th-th': "แฮนด์สลิง",
			'ko-kr': "핸드슬링"
		},

		damage: "20×",

		effect: {
			'ja-jp': "自分の手札の枚数×20ダメージ。",
			'zh-tw': "造成自己的手牌的張數×20點傷害。",
			'th-th': "แดเมจจะเท่ากับจำนวนการ์ดบนมือฝ่ายเรา x20",
			'ko-kr': "자신의 패의 장수 × 20데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 741879,
				tcgplayer: 566012,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card