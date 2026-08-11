import { Card } from "models/database/card"
import Set from "../SV3a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ズルズキン",
		'zh-tw': "頭巾混混",
		'th-th': "ซึรุซึคิน"
	},

	illustrator: "Mousho",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [560],
	hp: 120,
	types: ["Darkness"],

	description: {
		'ja-jp': "とても 荒っぽい 性格だが 家族や 仲間や 縄張りは 大切にする ところがある。",
		'zh-tw': "雖然性情非常粗魯，但也有重視家族、 夥伴和地盤的一面。",
		'th-th': "มีนิสัยหยาบคายมากแต่จะให้ความสำคัญกับครอบครัว พวกพ้องและอาณาเขตของตน"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "どやす",
			'zh-tw': "斥喝",
			'th-th': "ตวาด"
		},

		damage: 30,

		effect: {
			'ja-jp': "次の相手の番、このワザを受けたたねポケモンは、ワザが使えない。",
			'zh-tw': "在下個對手的回合，受到這個招式的【基礎】寶可夢，無法使用招式。",
			'th-th': "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอน[พื้นฐาน]ที่ได้รับท่าต่อสู้นี้ จะใช้ท่าต่อสู้ไม่ได้"
		}
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'ja-jp': "ヘッドバング",
			'zh-tw': "鐵頭碰",
			'th-th': "เฮดแบงก์"
		},

		damage: 130
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 734277,
				tcgplayer: 566896,
			},
		},
	],

	retreat: 2,
	regulationMark: "G",
}

export default card