import { Card } from "models/database/card"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ホルビー",
		'zh-tw': "掘掘兔",
		'th-th': "โฮรุบี"
	},

	illustrator: "Lee HyunJung",
	rarity: "Common",
	category: "Pokemon",
	dexId: [659],
	hp: 70,
	types: ["Colorless"],

	description: {
		'ja-jp': "危険に 敏感。 アーマーガアの 羽音を 聴きとると あっという間に 穴を 掘って 地面に 潜る。",
		'zh-tw': "對危險很敏感。只要聽到鋼鎧鴉拍打翅膀的聲音，就會馬上挖洞鑽進地下藏身。",
		'th-th': "ไวต่อภยันตราย พอได้เสียงปีกของอาร์เมอร์การ์ก็จะขุดรูแล้วมุดลงไปซ่อนใต้ดินเพียงเสี้ยววินาที"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "ふみふみ",
			'zh-tw': "踏踏",
			'th-th': "กระทืบเท้า"
		},

		damage: "10×",

		effect: {
			'ja-jp': "コインを2回投げ、オモテの数×10ダメージ。",
			'zh-tw': "擲2次硬幣，造成正面出現的次數×10點傷害。",
			'th-th': "ทอยเหรียญ 2 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x10"
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
				cardmarket: 724049,
				tcgplayer: 567049,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card