import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [856],
	set: Set,

	name: {
		'en-us': "Hatenna",
		'fr-fr': "Bibichut",
		'es-es': "Hatenna",
		'it-it': "Hatenna",
		'pt-br': "Hatenna",
		'de-de': "Brimova"
	},

	illustrator: "Sekio",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	attacks: [{
		name: {
			'en-us': "Psyshot",
			'fr-fr': "Piqûre Psy",
			'es-es': "Disparo Psi",
			'it-it': "Psicosparo",
			'pt-br': "Tiro Psíquico",
			'de-de': "Psychoschuss"
		},

		damage: 20,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "If this Pokémon senses a strong emotion, it will run away as fast as it can. It prefers areas without people."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567179,
				tcgplayer: 241732
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567179,
				tcgplayer: 241732
			}
		},
	],
}

export default card
