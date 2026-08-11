import { Card } from "../../../interfaces"
import Set from "../SLD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洗翠 千針魚",
		ja: "ヒスイ ハリーセン"
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		'zh-tw': "會用針散佈毒素的棘手傢伙，因而受到漁民們的厭惡。棲息在其他地區的千針魚則是呈現著不同的姿態。",
		ja: "針より 毒 散らす 厄介者ゆえ 漁師には 忌み嫌われし 存在。 他の地方では 異なる姿で 生息す。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "衝撞",
			ja: "ぶつかる"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "滾動衝撞",
			ja: "ころがりタックル"
		},

		damage: 30,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	dexId: [211]
}

export default card