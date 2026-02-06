import { Card } from "../../../interfaces"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		ja: "マラカッチ",
		'zh-tw': "沙鈴仙人掌",
		th: "มาราคัจจิ"
	},

	illustrator: "Masako Tomii",
	rarity: "Common",
	category: "Pokemon",
	dexId: [556],
	hp: 110,
	types: ["Grass"],

	description: {
		ja: "１年に 一度 種を まく。 花の 種は 栄養満点で 砂漠の 貴重な 食料。",
		'zh-tw': "一年散播一次種子。花的種子營養十足， 是沙漠中貴重的食糧。",
		th: "โปรยเมล็ดปีละครั้ง เมล็ดดอกไม้มีสารอาหารเต็มเปี่ยมและเป็นแหล่งอาหารอันมีค่าในทะเลทราย"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ダブルドロー",
			'zh-tw': "雙重抽出",
			th: "ดับเบิลดรอว์"
		},

		effect: {
			ja: "自分の山札を2枚引く。",
			'zh-tw': "從自己的牌庫抽出2張卡。",
			th: "จั่วการ์ด 2 ใบจากสำรับการ์ดฝ่ายเรา"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ミサイルばり",
			'zh-tw': "飛彈針",
			th: "มิสไซล์เข็ม"
		},

		damage: "30×",

		effect: {
			ja: "コインを4回投げ、オモテの数×30ダメージ。",
			'zh-tw': "擲4次硬幣，造成正面出現的次數×30點傷害。",
			th: "ทอยเหรียญ 4 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x30"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 741198
	}
}

export default card