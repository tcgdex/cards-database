import { Card } from "../../../interfaces"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		ja: "エテボース",
		'zh-tw': "雙尾怪手",
		th: "เอเทโบธ",
		ko: "겟핸보숭"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [424],
	hp: 100,
	types: ["Colorless"],

	description: {
		ja: "なにを するにも シッポを 使う。 ２本の シッポで 抱きしめられたら 本当に 懐かれた 証。",
		'zh-tw': "不管做什麼事都會用到尾巴。如果牠用２根尾巴抱緊你，就代表牠真的和你很親近。",
		th: "ใช้หางทำทุกสิ่งทุกอย่าง ถ้ามันกอดรัดด้วยหางทั้ง 2 แสดงว่ามันรักจริง",
		ko: "무엇을 하더라도 꼬리를 사용한다. 2개의 꼬리로 껴안는다면 정말로 친밀해졌다는 증거다."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "もってくる",
			'zh-tw': "呼喚",
			th: "รวบรวม",
			ko: "가져오기"
		},

		effect: {
			ja: "自分の山札を2枚引く。",
			'zh-tw': "從自己的牌庫抽出2張卡。",
			th: "จั่วการ์ด 2 ใบจากสำรับการ์ดฝ่ายเรา",
			ko: "자신의 덱을 2장 뽑는다."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ハンドスリング",
			'zh-tw': "手之吊懸",
			th: "แฮนด์สลิง",
			ko: "핸드슬링"
		},

		damage: "20×",

		effect: {
			ja: "自分の手札の枚数×20ダメージ。",
			'zh-tw': "造成自己的手牌的張數×20點傷害。",
			th: "แดเมจจะเท่ากับจำนวนการ์ดบนมือฝ่ายเรา x20",
			ko: "자신의 패의 장수 × 20데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 741879
	}
}

export default card