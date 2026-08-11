import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Blaziken",
		'fr-fr': "Braségali",
		'es-es': "Blaziken",
		'it-it': "Blaziken",
		'pt-br': "Blaziken",
		'de-de': "Lohgock"
	},

	illustrator: "PLANETA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		257,
	],

	hp: 140,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Combusken",
		'fr-fr': "Galifeu",
		'es-es': "Combusken",
		'it-it': "Combusken",
		'pt-br': "Combusken",
		'de-de': "Jungglut"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Clutch",
				'fr-fr': "Serre",
				'es-es': "Embrague",
				'it-it': "Grinfie",
				'pt-br': "Agarramento",
				'de-de': "Greifer"
			},
			effect: {
				'en-us': "The Defending Pokémon can't retreat during your opponent's next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				'es-es': "El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				'pt-br': "O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				'de-de': "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 50,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Burning Shot",
				'fr-fr': "Tir Brûlant",
				'es-es': "Disparo Ardiente",
				'it-it': "Bruciacolpo",
				'pt-br': "Tiro Ardente",
				'de-de': "Brandschuss"
			},
			effect: {
				'en-us': "Discard 2 Energy attached to this Pokémon. This attack does 150 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Défaussez 2 Énergies attachées à ce Pokémon. Cette attaque inflige 150 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Descarta 2 Energías unidas a este Pokémon. Este ataque hace 150 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Scarta due Energie assegnate a questo Pokémon. Questo attacco infligge 150 danni a uno dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Descarte 2 Energias ligadas a este Pokémon. Este ataque causa 150 de danos a 1 dos Pokémon de seu oponente. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				'de-de': "Lege 2 an dieses Pokémon angelegte Energien auf deinen Ablagestapel. Dieser Angriff fügt 1 Pokémon deines Gegners 150 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It can clear a 30-story building in a leap. Its fiery punches scorch its foes.",
	},

	thirdParty: {
		cardmarket: 281678,
		tcgplayer: 92186
	}
}

export default card
