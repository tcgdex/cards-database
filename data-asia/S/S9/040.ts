import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "帕奇利茲"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		'zh-tw': "有時候可以見到為了將儲存的電力分給同伴 而互相摩擦頰囊的帕奇利茲。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "機關閃電"
		},

		effect: {
			'zh-tw': "造成自己的場上寶可夢身上附加的「寶可夢道具」的數量×30點傷害。"
		},

		damage: "30×",
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card