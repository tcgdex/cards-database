import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "偽螳草",
		'zh-cn': "偽螳草",
		ja: "カリキリ"
	},

	illustrator: "mashu",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		'zh-tw': "極度厭惡睡午覺的時候 遭到打擾。會用日光浴 儲存的能量放射出光束。",
		'zh-cn': "極度厭惡睡午覺的時候 遭到打擾。會用日光浴 儲存的能量放射出光束。",
		ja: "昼寝の 邪魔を されるのが 大嫌い。 日光浴で 溜めた エネルギーで ビームを 撃ち出す。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "切",
			'zh-cn': "切",
			ja: "きる"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [753]
}

export default card