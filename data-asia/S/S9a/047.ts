import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洗翠 千針魚",
		ja: "ヒスイ ハリーセン"
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		'zh-tw': "會用針散布毒素的棘手傢伙，因而受到漁民們的厭惡。棲息在其他地區 的千針魚則是呈現著不同的姿態。",
		ja: "針より 毒 散らす 厄介者ゆえ 漁師には 忌み嫌われし 存在。 他の地方では 異なる姿で 生息す。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "尖刺猛攻",
			ja: "とげラッシュ"
		},

		effect: {
			'zh-tw': "擲硬幣直到出現反面，造成正面出現的次數×10點傷害。",
			ja: "ウラが出るまでコインを投げ、オモテの数×10ダメージ。"
		},

		damage: "10×"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",
	rarity: "Common",
	dexId: [211]
}

export default card