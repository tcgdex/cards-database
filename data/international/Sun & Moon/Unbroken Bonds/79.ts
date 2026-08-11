import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Espurr",
		'fr-fr': "Psystigri",
		'es-es': "Espurr",
		'it-it': "Espurr",
		'pt-br': "Espurr",
		'de-de': "Psiau"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		677,
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
				'en-us': "Caturday",
				'fr-fr': "Chamedi",
				'es-es': "Sábado Gatuno",
				'it-it': "Giornogatto",
				'pt-br': "Dia de Gato",
				'de-de': "Schnurrtag"
			},
			effect: {
				'en-us': "Draw a card. If you do, this Pokémon is now Asleep.",
				'fr-fr': "Piochez une carte. Dans ce cas, ce Pokémon est maintenant Endormi.",
				'es-es': "Roba 1 carta. Si lo haces, este Pokémon pasa a estar Dormido.",
				'it-it': "Pesca una carta. Se lo fai, questo Pokémon viene addormentato.",
				'pt-br': "Compre 1 carta. Se fizer isto, este Pokémon será Adormecido.",
				'de-de': "Ziehe 1 Karte. Wenn du das machst, schläft dieses Pokémon jetzt."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Ear Kinesis",
				'fr-fr': "Oreille Kinésique",
				'es-es': "Orejaquinesis",
				'it-it': "Ascolto Cinetico",
				'pt-br': "Cinese de Orelha",
				'de-de': "Ohrkinese"
			},
			effect: {
				'en-us': "This attack does 20 damage to 1 of your opponent’s Benched Pokémon for each damage counter on that Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 20 dégâts à l’un des Pokémon de Banc de votre adversaire pour chaque marqueur de dégâts sur ce Pokémon. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 20 puntos de daño a 1 de los Pokémon en Banca de tu rival por cada contador de daño en ese Pokémon. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 20 danni a uno dei Pokémon in panchina del tuo avversario per ogni segnalino danno su quel Pokémon. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 20 pontos de dano a 1 dos Pokémon no Banco do seu oponente para cada contador de dano naquele Pokémon (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte mal der Anzahl der Schadensmarken auf jenem Pokémon zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
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
		'en-us': "The organ that emits its intense psychic power is sheltered by its ears to keep power from leaking out.",
	},

	thirdParty: {
		cardmarket: 372367,
		tcgplayer: 189179
	}
}

export default card
