import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "銅象"
	},

	illustrator: "Shinya Mizuno",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],

	description: {
		'zh-tw': "能夠舉起重達５噸的貨物。 天一亮就會成群結隊 前往洞窟找礦石來吃。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "撞擊"
		},

		damage: 30,
		cost: ["Metal", "Colorless"]
	}, {
		name: {
			'zh-tw': "正面對決"
		},

		damage: 70,
		cost: ["Metal", "Metal", "Colorless"]
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
	regulationMark: "H",
	rarity: "Common"
}

export default card