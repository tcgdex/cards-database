import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [684],
	set: Set,

	name: {
		'en-us': "Swirlix",
		'fr-fr': "Sucroquin",
		'es-es': "Swirlix",
		'it-it': "Swirlix",
		'pt-br': "Swirlix",
		'de-de': "Flauschling"
	},

	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	attacks: [{
		name: {
			'en-us': "Draining Kiss",
			'fr-fr': "Vampibaiser",
			'es-es': "Beso Drenaje",
			'it-it': "Assorbibacio",
			'pt-br': "Beijo Drenante",
			'de-de': "Diebeskuss"
		},

		effect: {
			'en-us': "Heal 10 damage from this Pokémon.",
			'fr-fr': "Soignez 10 dégâts de ce Pokémon.",
			'es-es': "Cura 10 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 10 danni.",
			'pt-br': "Cure 10 pontos de dano deste Pokémon.",
			'de-de': "Heile 10 Schadenspunkte bei diesem Pokémon."
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "The sweet smell of cotton candy perfumes Swirlix's fluffy fur. This Pokémon spits out sticky string to tangle up its enemies."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567175,
				tcgplayer: 241728
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567175,
				tcgplayer: 241728
			}
		},
	],
}

export default card
