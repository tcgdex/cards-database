import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "ゾウドウ",
		'zh-tw': "銅象"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Common",
	category: "Pokemon",
	dexId: [878],
	hp: 100,
	types: ["Metal"],

	description: {
		ja: "尖った 鼻先で 硬い 岩を 削り取って 食べる。 温厚で 人の 力仕事を 手伝う。",
		'zh-tw': "尖尖的鼻尖能削斷堅硬的岩石來作為糧食。性情溫馴， 會幫助人類做粗重的工作。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			ja: "ふむ",
			'zh-tw': "踩"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card