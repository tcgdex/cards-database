import { Card } from "../../../interfaces"
import Set from "../sv1S"

const card: Card = {
	set: Set,

	name: {
		ja: "パピモッチ",
		'zh-tw': "狗仔包"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	dexId: [926],
	hp: 50,
	types: ["Psychic"],

	description: {
		ja: "しっとり すべすべの 触り心地。 吐息に 含まれている 酵母で まわりのものを 発酵させる。",
		'zh-tw': "摸起來既濕潤又絲滑。吐出的氣息裡含有酵母， 可以使周圍的東西發酵。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "うしろげり",
			'zh-tw': "後踢"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card