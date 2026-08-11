import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Slaking",
		'fr-fr': "Monaflèmit",
		'es-es': "Slaking",
		'it-it': "Slaking",
		'pt-br': "Slaking",
		'de-de': "Letarking"
	},

	illustrator: "PLANETA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		289,
	],

	hp: 150,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Vigoroth",
		'fr-fr': "Vigoroth",
		'es-es': "Vigoroth",
		'it-it': "Vigoroth",
		'pt-br': "Vigoroth",
		'de-de': "Muntier"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Amnesia",
				'fr-fr': "Amnésie",
				'es-es': "Amnesia",
				'it-it': "Amnesia",
				'pt-br': "Amnésia",
				'de-de': "Amnesie"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Active Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn.",
				'fr-fr': "Choisissez l'une des attaques du Pokémon Actif de votre adversaire. Ce dernier ne peut pas utiliser l'attaque choisie pendant le prochain tour de votre adversaire.",
				'es-es': "Elige 1 de los ataques del Pokémon Activo de tu rival. Ese Pokémon no puede usar ese ataque durante el próximo turno de tu rival.",
				'it-it': "Scegli un attacco del Pokémon attivo del tuo avversario. Durante il prossimo turno del tuo avversario, quel Pokémon non potrà utilizzarlo.",
				'pt-br': "Escolha 1 dos ataques do Pokémon Ativo do seu oponente. Esse Pokémon não poderá usar esse ataque durante a próxima vez de jogar do seu oponente.",
				'de-de': "Wähle 1 Angriff des Aktiven Pokémon deines Gegners. Dieses Pokémon kann den gewählten Angriff während des nächsten Zuges deines Gegners nicht einsetzen."
			},
			damage: 50,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Knuckle Sandwich",
				'fr-fr': "Choc Poing",
				'es-es': "Puño a Bocajarro",
				'it-it': "Schiacciatina",
				'pt-br': "Soco Falso",
				'de-de': "Keile"
			},
			effect: {
				'en-us': "Discard an Energy attached to this Pokémon.",
				'fr-fr': "Défaussez une Énergie attachée à ce Pokémon.",
				'es-es': "Descarta 1 Energía unida a este Pokémon.",
				'it-it': "Scarta un'Energia assegnata a questo Pokémon.",
				'pt-br': "Descarte uma Energia ligada a este Pokémon.",
				'de-de': "Lege 1 an dieses Pokémon angelegte Energie auf deinen Ablagestapel."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "The world's laziest Pokémon. It moves to another spot when there's no food left within its reach.",
	},

	thirdParty: {
		cardmarket: 281747,
		tcgplayer: 92263
	}
}

export default card
