import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2019'

const card: Card = {
	set: Set,
	illustrator: "Sekio",
	category: "Pokemon",

	dexId: [10],

	description: {
		en: "When attacked by bird Pokémon, it resists by releasing a terrifically strong odor from its antennae, but it often becomes their prey."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Surprise Attack"
		},

		damage: 20,

		effect: {
			en: "Flip a coin. If tails, this attack does nothing."
		}
	}],

	name: {
		en: "Caterpie"
	},

	rarity: "None",
	hp: 50,
	types: ["Grass"],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],

	retreat: 1,

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 412849,
				tcgplayer: 200960
			}
		}
	]
}

export default card
