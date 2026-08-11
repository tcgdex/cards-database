import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Meditite",
		'fr-fr': "Méditikka",
		'es-es': "Meditite",
		'it-it': "Meditite",
		'pt-br': "Meditite",
		'de-de': "Meditie"
	},

	illustrator: "Mina Nakai",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		307,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Spirited Headbutt",
				'fr-fr': "Coup d’Boule Emporté",
				'es-es': "Cabezazo Vigoroso",
				'it-it': "Testata Ascetica",
				'pt-br': "Cabeçada Vigorosa",
				'de-de': "Kühne Kopfnuss"
			},
			effect: {
				'en-us': "This Pokémon can’t use Spirited Headbutt during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas utiliser Coup d’Boule Emporté pendant votre prochain tour.",
				'es-es': "Este Pokémon no puede usar Cabezazo Vigoroso durante tu próximo turno.",
				'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Testata Ascetica.",
				'pt-br': "Este Pokémon não poderá usar Cabeçada Vigorosa durante a sua próxima vez de jogar.",
				'de-de': "Dieses Pokémon kann Kühne Kopfnuss während deines nächsten Zuges nicht einsetzen."
			},
			damage: 40,

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
		'en-us': "It always trains deep in mountains. It levitates when it heightens its spiritual power through meditation.",
	},

	thirdParty: {
		cardmarket: 388347,
		tcgplayer: 195062
	}
}

export default card
