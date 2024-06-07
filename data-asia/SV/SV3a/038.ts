import { Card } from "../../../interfaces"
import Set from "../SV3a"

const card: Card = {
	set: Set,

	name: {
		ja: "ズルズキン",
		'zh-tw': "頭巾混混",
		th: "ซึรุซึคิน"
	},

	illustrator: "Mousho",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [560],
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "とても 荒っぽい 性格だが 家族や 仲間や 縄張りは 大切にする ところがある。",
		'zh-tw': "雖然性情非常粗魯，但也有重視家族、 夥伴和地盤的一面。",
		th: "มีนิสัยหยาบคายมากแต่จะให้ความสำคัญกับครอบครัว พวกพ้องและอาณาเขตของตน"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "どやす",
			'zh-tw': "斥喝",
			th: "ตวาด"
		},

		damage: 30,

		effect: {
			ja: "次の相手の番、このワザを受けたたねポケモンは、ワザが使えない。",
			'zh-tw': "在下個對手的回合，受到這個招式的【基礎】寶可夢，無法使用招式。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอน[พื้นฐาน]ที่ได้รับท่าต่อสู้นี้ จะใช้ท่าต่อสู้ไม่ได้"
		}
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			ja: "ヘッドバング",
			'zh-tw': "鐵頭碰",
			th: "เฮดแบงก์"
		},

		damage: 130
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card