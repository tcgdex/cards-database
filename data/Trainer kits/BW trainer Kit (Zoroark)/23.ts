import { Card } from '../../../interfaces'
import Set from '../BW trainer Kit (Zoroark).ts'

const card: Card = {
	dexId: [570],
	set: Set,

	name: {
		en: "Zorua",
		fr: "Zorua",
		es: "Zorua",
		it: "Zorua",
		pt: "Zorua",
		de: "Zorua"
	},

	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: [
			"Colorless",
			"Colorless"
		],
		name: {
			en: "Lunge"
		},
		effect: {
			en: "Flip a coin. If tails, this attack does nothing."
		},
		damage: 30
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	resistances: [{
		type: "Psychic",
		value: "-20"
	}],

	description: {
		en: "To protect themselves from danger, they hide their true identities by transforming into people and Pokémon."
	},

	retreat: 1,
}

export default card
