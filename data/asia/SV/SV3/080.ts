import { Card } from "models/database/card"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "コマタナ",
		'zh-tw': "駒刀小兵",
		'th-th': "โคมาทานา"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Common",
	category: "Pokemon",
	dexId: [624],
	hp: 70,
	types: ["Metal"],

	description: {
		'ja-jp': "強敵にも 恐れず 挑む。 いざとなると 相手に しがみつき 体中の 刃で 貫く。",
		'zh-tw': "遇上強敵也是不畏挑戰。在緊要關頭時會緊緊抓住對手，以身上的刀刃將其刺穿。",
		'th-th': "ต่อกรกับศัตรูที่แข็งแกร่งอย่างไม่เกรงกลัว พอถึงยามคับขันจะเกาะติดศัตรูแน่นแล้วใช้ใบมีดทั่วทั้งตัวแทง"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			'ja-jp': "トリプルカッター",
			'zh-tw': "三重利刃",
			'th-th': "ทริปเปิลคัตเตอร์"
		},

		damage: "10×",

		effect: {
			'ja-jp': "コインを3回投げ、オモテの数×10ダメージ。",
			'zh-tw': "擲3次硬幣，造成正面出現的次數×10點傷害。",
			'th-th': "ทอยเหรียญ 3 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x10"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 724032,
				tcgplayer: 567034,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card