import { Card } from "../../../interfaces"
import Set from "../S8"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "美洛耶塔"
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'zh-tw': "以特殊的發聲法唱出的旋律，能自在地操控聽者的情緒。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "旋律迴響"
		},

		effect: {
			'zh-tw': "造成自己的場上寶可夢身上附加的「匯流能量」的數量×70點傷害。"
		},

		damage: "70×",
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

	retreat: 1,
	regulationMark: "E"
}

export default card