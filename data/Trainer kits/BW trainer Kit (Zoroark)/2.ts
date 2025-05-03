import { Card } from '../../../interfaces'
import Set from '../BW trainer Kit (Zoroark).ts'

const card: Card = {
	dexId: [505],
	set: Set,

	name: {
		en: "Watchog",
		fr: "Miradar",
		es: "Watchog",
		it: "Watchog",
		pt: "Watchog",
		de: "Kukmarda"
	},

	illustrator: "match",
	rarity: "None",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	evolveFrom: {
		en: "Patrat",
		fr: "Ratentif",
		es: "Patrat",
		it: "Patrat",
		pt: "Patrat",
		de: "Nagelotz"
	},

	stage: "Stage1",

	attacks: [{
		cost: [
			"Colorless",
			"Colorless"
		],
		name: {
			en: "Confuse Ray"
		},
		effect: {
			en: "The Defending Pokémon is now Confused."
		},
	}, {
		cost: [
			"Colorless",
			"Colorless"
		],
		name: {
			en: "Hyper Fang"
		},
		effect: {
			en: "Flip a coin. If tails, this attack does nothing."
		},
		damage: 60
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	description: {
		en: "They make the patterns on their bodies shine in order to threaten predators. Keen eyesight lets them see in the dark."
	},

	retreat: 1,
}

export default card
