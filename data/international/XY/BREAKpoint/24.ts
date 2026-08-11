import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Cloyster",
		'fr-fr': "Crustabri",
		'es-es': "Cloyster",
		'it-it': "Cloyster",
		'pt-br': "Cloyster",
		'de-de': "Austos"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		91,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Shellder",
		'fr-fr': "Kokiyas",
		'es-es': "Shellder",
		'it-it': "Shellder",
		'pt-br': "Shellder",
		'de-de': "Muschas"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Sudden Grip",
				'fr-fr': "Pince Surprise",
				'es-es': "Presa Súbita",
				'it-it': "Presa Improvvisa",
				'pt-br': "Agarramento Súbito",
				'de-de': "Zuschnappen"
			},
			effect: {
				'en-us': "If this Pokémon evolved from Shellder during this turn, your opponent's Active Pokémon is now Paralyzed.",
				'fr-fr': "Si ce Pokémon a évolué de Kokiyas pendant ce tour, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Si este Pokémon ha evolucionado de Shellder durante este turno, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Se questo Pokémon si è evoluto da Shellder durante questo turno, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Se este Pokémon evoluiu do Shellder durante esta vez de jogar, o Pokémon Ativo do seu oponente será Paralisado.",
				'de-de': "Wenn sich dieses Pokémon während dieses Zuges aus Muschas entwickelt hat, ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Surf",
				'fr-fr': "Surf",
				'es-es': "Surf",
				'it-it': "Surf",
				'pt-br': "Surfe",
				'de-de': "Surfer"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Its shell is extremely hard. It cannot be shattered, even with a bomb. The shell opens only when it is attacking.",
	},

	thirdParty: {
		cardmarket: 288199,
		tcgplayer: 111527
	}
}

export default card
