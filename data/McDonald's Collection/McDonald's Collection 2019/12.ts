import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2019'

const card: Card = {
	set: Set,
	illustrator: "Atsuko Nishida",
	category: "Pokemon",

	dexId: [133],

	description: {
		en: "Current studies show it can evolve into an incredible eight different species of Pokémon."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Gnaw"
		},

		damage: 20
	}],

	name: {
		en: "Eevee"
	},

	rarity: "None",
	hp: 60,
	types: ["Colorless"],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],

	retreat: 1,

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 412904,
				tcgplayer: 200977
			}
		}
	]
}

export default card
