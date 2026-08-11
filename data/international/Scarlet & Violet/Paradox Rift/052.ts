import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [960],
	set: Set,

	name: {
		en: "Wiglett",
		fr: "Taupikeau",
		es: "Wiglett",
		it: "Wiglett",
		pt: "Wiglett",
		de: "Schligda"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Vibration",
			fr: "Vibration",
			es: "Vibración",
			it: "Vibrazione",
			pt: "Vibração",
			de: "Schwingung"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		en: "This Pokémon can pick up the scent of a Veluza just over 65 feet away and will hide itself in the sand.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740542,
				tcgplayer: 523662,
				cardtrader: 265113
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740542,
				tcgplayer: 523662,
				cardtrader: 265113
			}
		},
	],

	illustrator: "Tomokazu Komiya",

	
}

export default card
