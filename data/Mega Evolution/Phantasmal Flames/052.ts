import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Vibrava",
		fr: "Vibraninf",
		es: "Vibrava",
		'es-mx': "Vibrava",
		de: "Vibrava",
		it: "Vibrava",
		pt: "Vibrava"
	},

	evolveFrom: {
		en: "Trapinch",
		fr: "Kraknoix",
		es: "Trapinch",
		'es-mx': "Trapinch",
		de: "Knacklion",
		it: "Trapinch",
		pt: "Trapinch",
	},

	rarity: "Common",
	category: "Pokemon",

	dexId: [329],
	hp: 90,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Super Vibration",
			fr: "Super Vibration",
			es: "Supervibración",
			'es-mx': "Supervibración",
			de: "Superschwingung",
			it: "Vibrazione Super",
			pt: "Supervibração"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	description: {
		en: "Rather than using its underdeveloped wings for flight, it rubs them together, emitting ultrasonic waves to attack its enemies.",
	},

	illustrator: "Miki Tanaka",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857627,
				tcgplayer: 662237,
				cardtrader: 356835
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857627,
				tcgplayer: 662237,
				cardtrader: 356835
			}
		},
	],
}

export default card
