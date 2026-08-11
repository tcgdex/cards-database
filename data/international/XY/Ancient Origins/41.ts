import { Card } from 'models/database/card'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		'en-us': "Golurk",
		'fr-fr': "Golemastoc",
		'es-es': "Golurk",
		'it-it': "Golurk",
		'pt-br': "Golurk",
		'de-de': "Golgantes"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		623,
	],

	hp: 130,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Golett",
		'fr-fr': "Gringolem",
		'es-es': "Golett",
		'it-it': "Golett",
		'pt-br': "Golett",
		'de-de': "Golbit"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Dig Out",
				'fr-fr': "Excavation",
				'es-es': "Cavar",
				'it-it': "Scavata",
				'pt-br': "Escavar",
				'de-de': "Freischaufeln"
			},
			effect: {
				'en-us': "Discard the top card of your deck. If that card is a Fighting Energy card, attach it to this Pokémon.",
				'fr-fr': "Défaussez la carte du dessus de votre deck. Si c'est une carte Énergie Fighting, attachez-la à ce Pokémon.",
				'es-es': "Descarta la primera carta de tu baraja. Si es una carta de Energía Fighting, únela a este Pokémon.",
				'it-it': "Scarta la carta in cima al tuo mazzo. Se è una carta Energia Fighting, assegnala a questo Pokémon.",
				'pt-br': "Descarte o card de cima do seu baralho. Se este card for um card de Energia Fighting, ligue-o a este Pokémon.",
				'de-de': "Lege die oberste Karte deines Decks auf deinen Ablagestapel. Handelt es sich um eine Fighting-Energiekarte, lege sie an dieses Pokémon an."
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double Lariat",
				'fr-fr': "Double Lasso",
				'es-es': "Doble Lazo",
				'it-it': "Doppio Lazzo",
				'pt-br': "Laço Duplo",
				'de-de': "Doppel-Lasso"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 90 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 90 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 2 monedas. Este ataque hace 90 puntos de daño por cada cara.",
				'it-it': "Lancia due volte una moneta. Questo attacco infligge 90 danni ogni volta che esce testa.",
				'pt-br': "Jogue 2 moedas. Este ataque causa 90 de danos vezes o número de caras.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 90 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "90×",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "It flies across the sky at Mach speeds. Removing the seal on its chest makes its internal energy go out of control.",
	},

	thirdParty: {
		cardmarket: 284216,
		tcgplayer: 101463
	}
}

export default card
