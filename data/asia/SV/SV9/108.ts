import { Card } from "models/database/card"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "Nのゾロア"
	},

	illustrator: "Megumi Mizutani",
	rarity: "None",
	category: "Pokemon",
	dexId: [570],
	hp: 70,
	types: ["Darkness"],

	description: {
		'ja-jp': "相手の 姿に 化けてみせて 驚かせる。 無口な 子どもに 化けていることが 多いらしい。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'ja-jp': "ひっかく"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 807695,
				tcgplayer: 614984,
			},
		},
	],

	retreat: 1
}

export default card