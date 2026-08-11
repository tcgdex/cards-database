import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Gulpin",
		'fr-fr': "Gloupti",
		'es-es': "Gulpin",
		'it-it': "Gulpin",
		'pt-br': "Gulpin",
		'de-de': "Schluppuck"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		316,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Yawn",
				'fr-fr': "Bâillement",
				'es-es': "Bostezo",
				'it-it': "Sbadiglio",
				'pt-br': "Bocejo",
				'de-de': "Gähner"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
				'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Spit Poison",
				'fr-fr': "Crache-Venin",
				'es-es': "Escupir Veneno",
				'it-it': "Sputaveleno",
				'pt-br': "Cuspe Venenoso",
				'de-de': "Giftspucke"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "There is nothing its stomach can't digest. While it is digesting, vile, overpowering gases are expelled.",
	},

	thirdParty: {
		cardmarket: 361302,
		tcgplayer: 170878
	}
}

export default card
