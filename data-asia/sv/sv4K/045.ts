import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "ゴルバット",
		'zh-tw': "大嘴蝠"
	},

	illustrator: "Eri Yamaki",
	rarity: "Common",
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
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "きゅうけつ",
			'zh-tw': "吸血"
		},

		damage: 30,

		effect: {
			ja: "相手のバトルポケモンに与えたダメージぶん、このポケモンのHPを回復する。",
			'zh-tw': "將這隻寶可夢恢復對對手的戰鬥寶可夢造成的傷害相同數值的HP。"
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