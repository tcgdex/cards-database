import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Cloyster",
		'fr-fr': "Crustabri",
		'es-es': "Cloyster",
		'it-it': "Cloyster",
		'pt-br': "Cloyster",
		'de-de': "Austos"
	},

	illustrator: "MAHOU",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		91,
	],

	hp: 130,

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
				"Colorless",
			],
			name: {
				'en-us': "Shell Grab",
				'fr-fr': "Carap'Attrape",
				'es-es': "Agarre Caparazón",
				'it-it': "Acchiappaguscio",
				'pt-br': "Concha Agarradora",
				'de-de': "Schnappmuschel"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
				'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tidal Wave",
				'fr-fr': "Raz-de-Marée",
				'es-es': "Maremoto",
				'it-it': "Mareggiata",
				'pt-br': "Maremoto",
				'de-de': "Flutwelle"
			},

			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		'en-us': "Its shell is extremely hard. It cannot be shattered, even with a bomb. The shell opens only when it is attacking."
	},

	thirdParty: {
		cardmarket: 436359,
		tcgplayer: 208340
	}
}

export default card
