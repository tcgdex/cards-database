import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "噴嚏熊",
		ja: "クマシュン"
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'zh-tw': "健康時鼻涕的黏度會變強。只要遇到自己討厭的對手， 就會把鼻涕擦到對方身上。",
		ja: "体調が いいと 鼻水の 粘り気が 増す。 嫌な 相手に 鼻水を ぺとりと なすりつける。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "寒意",
			ja: "ひんやり"
		},

		damage: 20,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [613],

	thirdParty: {
		cardmarket: 605883
	}
}

export default card