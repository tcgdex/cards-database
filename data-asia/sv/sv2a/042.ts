import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ゴルバット",
		'zh-tw': "大嘴蝠"
	},

	illustrator: "Scav",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [42],
	hp: 80,
	types: ["Darkness"],

	description: {
		ja: "小さな 脚で 器用に 歩く。 寝ている 獲物に 忍びより キバを 突きたて 血を すするのだ。",
		'zh-tw': "能以小小的腳靈巧地步行。會無聲無息地靠近沉睡中的獵物， 用獠牙咬住對方並且吸食血液。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ちょくげきひこう",
			'zh-tw': "直擊飛行"
		},

		effect: {
			ja: "相手のポケモン1匹に、40ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的1隻寶可夢受到40點傷害。[在備戰區不計算弱點・抵抗力。]"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card