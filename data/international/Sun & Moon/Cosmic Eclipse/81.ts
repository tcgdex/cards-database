import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Kirlia",
		'fr-fr': "Kirlia",
		'es-es': "Kirlia",
		'it-it': "Kirlia",
		'pt-br': "Kirlia",
		'de-de': "Kirlia"
	},

	illustrator: "sowsow",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		281,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Ralts",
		'fr-fr': "Tarsal",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Hypnosis",
				'fr-fr': "Hypnose",
				'es-es': "Hipnosis",
				'it-it': "Ipnosi",
				'pt-br': "Hipnose",
				'de-de': "Hypnose"
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
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Spiral Kick",
				'fr-fr': "Coup’d Pied en Spirale",
				'es-es': "Patada Espiral",
				'it-it': "Spiralcalcio",
				'pt-br': "Chute Espiral",
				'de-de': "Drehtritt"
			},

			damage: 20,

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
		'en-us': "The cheerful spirit of its Trainer gives it energy for its psychokinetic power. It spins and dances when happy.",
	},

	thirdParty: {
		cardmarket: 408049,
		tcgplayer: 201256
	}
}

export default card
