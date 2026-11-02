import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2019'

const card: Card = {
	set: Set,
	illustrator: "Atsuko Nishida",
	category: "Pokemon",

	dexId: [133],

	description: {
		en: "Current studies show it can evolve into an incredible eight different species of Pokémon.",
		de: "Nach derzeitigem Forschungsstand kann es sich zu acht verschiedenen Pokémon entwickeln."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Gnaw",
			de: "Nagen"
		},

		damage: 20
	}],

	name: {
		en: "Eevee",
		de: "Evoli"
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

