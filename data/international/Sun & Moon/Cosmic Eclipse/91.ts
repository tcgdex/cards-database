import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Skrelp",
		'fr-fr': "Venalgue",
		'es-es': "Skrelp",
		'it-it': "Skrelp",
		'pt-br': "Skrelp",
		'de-de': "Algitt"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		690,
	],

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
				'en-us': "Poison Breath",
				'fr-fr': "Haleine Empoisonnée",
				'es-es': "Aliento Venenoso",
				'it-it': "Velenospiro",
				'pt-br': "Hálito Venenoso",
				'de-de': "Gifthauch"
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

	retreat: 2,

	description: {
		'en-us': "It vanishes into seaweed and remains perfectly still to avoid attacks from large Pokémon. Rotten seaweed is its main food source.",
	},

	thirdParty: {
		cardmarket: 408099,
		tcgplayer: 201265
	}
}

export default card
