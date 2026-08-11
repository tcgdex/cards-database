import { Card } from "../../../interfaces"
import Set from "../SN"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "毛辮羊",
		ja: "ウールー"
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'zh-tw': "捲捲的體毛彈性十足。就算從懸崖上掉下去， 也不會受傷。",
		ja: "パーマの かかった 体毛は 高い クッション性が ある。 崖から 落ちても へっちゃら。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "滾滾滾動",
			ja: "コロコロころがる"
		},

		effect: {
			'zh-tw': "擲硬幣直到出現反面，造成正面出現的次數×30點傷害。",
			ja: "ウラが出るまでコインを投げ、オモテの数×30ダメージ。"
		},

		damage: "30×",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	dexId: [831]
}

export default card