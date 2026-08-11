import { Card } from "../../../interfaces"
import Set from "../SK"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "銅鏡怪",
		ja: "ドーミラー"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	description: {
		'zh-tw': "雖然人們說把銅鏡怪打磨到發光，牠就能映照出真相，但其實牠非常討厭被打磨。",
		ja: "磨けば 光り 真実を 映しだすとも いわれるが ドーミラーは とても 嫌がる。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "衝撞",
			ja: "ぶつかる"
		},

		damage: 30,
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "－30"
	}],

	retreat: 1,
	regulationMark: "E",
	dexId: [436]
}

export default card