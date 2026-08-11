import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "パピモッチ",
		'zh-tw': "狗仔包",
		'id-id': "Fidough"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	dexId: [926],
	hp: 50,
	types: ["Psychic"],

	description: {
		'ja-jp': "しっとり すべすべの 触り心地。 吐息に 含まれている 酵母で まわりのものを 発酵させる。",
		'zh-tw': "摸起來既濕潤又絲滑。吐出的氣息裡含有酵母， 可以使周圍的東西發酵。",
		'id-id': "Tubuh Fidough empuk, halus, dan nyaman dipegang. Napasnya yang mengandung ragi dapat memfermentasikan benda-benda yang ada di sekitarnya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "うしろげり",
			'zh-tw': "後踢",
			'id-id': "Tendangan Belakang"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 747620,
				tcgplayer: 567667,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card