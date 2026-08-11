import { Card } from "../../../interfaces"
import Set from "../Sc1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "果然翁V"
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 220,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "堅忍返"
		},

		effect: {
			'zh-tw': "將雙方的戰鬥寶可夢身上放置的傷害指示物互換。"
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "影子束縛"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。"
		},

		damage: 70,
		cost: ["Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card