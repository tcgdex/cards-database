import { Card } from "../../../interfaces"
import Set from "../SC2D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "哥德小姐"
	},

	illustrator: "Eri Yamaki",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	description: {
		'zh-tw': "根據星星的動向預知未來。雖然擁有強大的精神力量，但生性並不喜好紛爭。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "精神歪曲"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。"
		},

		damage: 40,
		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "扭歪"
		},

		effect: {
			'zh-tw': "在不看正面的情況下，從對手的手牌選擇2張，在看過那些卡正面後放回對手的牌庫並重洗。"
		},

		damage: 90,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
