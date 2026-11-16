import { Card } from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
	set: Set,

	name: {
		ja: "ポチエナ"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	dexId: [261],
	hp: 50,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		name: {
			ja: "かげしばり"
		},

		effect: {
			ja: "次の相手の番、このワザを受けた相手はにげるができない。"
		},

		damage: 10,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	resistances: [{
		type: "Psychic",
		value: "-30"
	}],

	retreat: 1,
	variants: [
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 784531,
				tcgplayer: 613046,
				cardtrader: 138031,
			},
		},
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 784531,
				tcgplayer: 613046,
				cardtrader: 138031,
			},
		},
	]
}

export default card
