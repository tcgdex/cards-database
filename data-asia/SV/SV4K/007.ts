import { Card } from "../../../interfaces"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		ja: "アママイコ",
		'zh-tw': "甜舞妮",
		th: "อมามาอิโกะ",
		ko: "달무리나"
	},

	illustrator: "Kariya",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [762],
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "元気な 気持ちになれる 甘い 香りを 振りまく。 制汗剤の フレーバーとして 人気が 高い。",
		'zh-tw': "會散發出能振奮心情的香甜氣味。作為止汗劑 的香味擁有極高的人氣。",
		th: "โปรยกลิ่นหอมหวานที่ทำให้รู้สึกสดชื่น ผลิตภัณฑ์ระงับเหงื่อที่ใช้กลิ่นนี้ได้รับความนิยมสูงมาก",
		ko: "기운이 솟을 것만 같은 달콤한 향기를 흩뿌린다. 땀 억제제의 향료로 인기가 좋다."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "かいてんアタック",
			'zh-tw': "迴轉攻擊",
			th: "โจมตีหมุนวน",
			ko: "회전어택"
		},

		damage: 30
	}, {
		cost: ["Grass", "Grass"],

		name: {
			ja: "ダブルスピン",
			'zh-tw': "雙重旋轉",
			th: "ดับเบิลสปิน",
			ko: "더블스핀"
		},

		damage: "40×",

		effect: {
			ja: "コインを2回投げ、オモテの数×40ダメージ。",
			'zh-tw': "擲2次硬幣，造成正面出現的次數×40點傷害。",
			th: "ทอยเหรียญ 2 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x40"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 741220
	}
}

export default card