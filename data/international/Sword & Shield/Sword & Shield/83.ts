import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Gastly",
		'fr-fr': "Fantominus",
		'es-es': "Gastly",
		'it-it': "Gastly",
		'pt-br': "Gastly",
		'de-de': "Nebulak"
	},

	illustrator: "Taira Akitsu",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Fade Out",
				'fr-fr': "Faiblir",
				'es-es': "Difuminar",
				'it-it': "Dissolvenza",
				'pt-br': "Desaparecer",
				'de-de': "Ausblenden"
			},
			effect: {
				'en-us': "Put this Pokémon and all attached cards into your hand.",
				'fr-fr': "Ajoutez à votre main ce Pokémon et toutes les cartes attachées.",
				'es-es': "Pon este Pokémon y todas las cartas unidas a él en tu mano.",
				'it-it': "Riprendi in mano questo Pokémon e tutte le carte a esso assegnate.",
				'pt-br': "Coloque este Pokémon e todas as cartas ligadas a ele na sua mão.",
				'de-de': "Nimm dieses Pokémon und alle angelegten Karten auf deine Hand."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		'en-us': "Born from gases, anyone would faint if engulfed by its gaseous body, which contains poison."
	},

	dexId: [92],

	thirdParty: {
		cardmarket: 436539,
		tcgplayer: 208388
	}
}

export default card
