import { Card } from "../../../interfaces"
import Set from "../SPD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "代歐奇希斯VSTAR"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 270,
	types: ["Psychic"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "精神標槍"
		},

		effect: {
			'zh-tw': "對手的備戰區的1隻「寶可夢【V】」也受到60點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		damage: 190,
		cost: ["Psychic", "Psychic", "Colorless"]
	}, {
		name: {
			'zh-tw': "[VSTAR力量]星星神力"
		},

		effect: {
			'zh-tw': "造成雙方的戰鬥寶可夢身上附加的能量的數量×60點傷害。[對戰中，己方只可使用1次【VSTAR】力量。]"
		},

		damage: "60×",
		cost: ["Psychic"]
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
	regulationMark: "F"
}

export default card