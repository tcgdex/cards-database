import { Card } from "models/database/card"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "パルデア ドオー",
		'zh-tw': "帕底亞 土王",
		'th-th': "พัลเดีย โดะโอ"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [980],
	hp: 140,
	types: ["Darkness"],

	description: {
		'ja-jp': "敵に 襲われると 太い 棘を 胴体から 突き出して 反撃。 身を切る 覚悟の 危険な 技。",
		'zh-tw': "一旦遭到敵人襲擊，就會從胴體伸出粗壯的刺來反擊。是需有覺悟承受劇痛的危險招式。",
		'th-th': "เมื่อถูกศัตรูโจมตี หนามหนาจะแทงออกมาจากลำตัวเพื่อตอบโต้ เป็นท่าอันตรายที่ต้องยอมรับความเสี่ยง"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'ja-jp': "とびちるどく",
			'zh-tw': "噴濺毒",
			'th-th': "พิษกระเด็น"
		},

		effect: {
			'ja-jp': "おたがいのバトルポケモンを、それぞれどくにする。",
			'zh-tw': "將雙方的戰鬥寶可夢【中毒】。",
			'th-th': "ทำให้โปเกมอนบนตำแหน่งต่อสู้ของทั้งสองฝ่าย แต่ละตัวเป็นสภาวะ[พิษ]"
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'ja-jp': "ベノムショック",
			'zh-tw': "毒液衝擊",
			'th-th': "เวนอมช็อก"
		},

		damage: "80+",

		effect: {
			'ja-jp': "相手のバトルポケモンがどくなら、120ダメージ追加。",
			'zh-tw': "若對手的戰鬥寶可夢【中毒】，則增加120點傷害。",
			'th-th': "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ] การโจมตีนี้จะเพิ่มแดเมจอีก 120"
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
				cardmarket: 724021,
				tcgplayer: 567023,
			},
		},
	],

	retreat: 3,
	regulationMark: "G"
}

export default card