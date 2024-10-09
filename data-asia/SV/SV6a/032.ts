import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "索羅亞克"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		'zh-tw': "有著一口氣迷惑許多人的力量。 會讓人看見虛幻的景色， 以保護自己的居所。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "幻影劫持"
		},

		effect: {
			'zh-tw': "造成對手的場上的「寶可夢【ex】・【V】」的數量×60點傷害。"
		},

		damage: "60×",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "利爪劈擊"
		},

		damage: 110,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Rare"
}

export default card