import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "啃果蟲"
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],

	description: {
		'zh-tw': "終其一生都在蘋果裡度過。遇到天敵鳥寶可夢時，會裝成蘋果保護自己。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "縮入殼中"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害。"
		},

		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
