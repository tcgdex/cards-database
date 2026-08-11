import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Moltres",
		'fr-fr': "Sulfura",
		'es-es': "Moltres",
		'it-it': "Moltres",
		'pt-br': "Moltres",
		'de-de': "Lavados"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		146,
	],

	hp: 120,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Top Burner",
				'fr-fr': "Super Pyro",
				'es-es': "Cima Ardiente",
				'it-it': "Cimardente",
				'pt-br': "Superqueimador",
				'de-de': "Top-Burner"
			},
			effect: {
				'en-us': "Discard all Fire Energy from this Pokémon. Then, discard a card from the top of your opponent’s deck for each Energy you discarded in this way.",
				'fr-fr': "Défaussez toute l’Énergie Fire de ce Pokémon. Ensuite, défaussez une carte du dessus du deck de votre adversaire pour chaque Énergie défaussée de cette façon.",
				'es-es': "Descarta todas las Energías Fire de este Pokémon. Después, descarta 1 carta de la parte superior de la baraja de tu rival por cada Energía que hayas descartado de esta manera.",
				'it-it': "Scarta tutte le Energie Fire assegnate a questo Pokémon. Poi scarta una carta dalla cima del mazzo del tuo avversario per ogni Energia che hai scartato in questo modo.",
				'pt-br': "Descarte todas as Energias Fire deste Pokémon. Em seguida, descarte a primeira carta do baralho do seu oponente para cada Energia descartada desta forma.",
				'de-de': "Lege alle Fire-Energien von diesem Pokémon auf deinen Ablagestapel. Lege anschließend für jede auf diese Weise auf deinen Ablagestapel gelegte Energie 1 Karte vom Deck deines Gegners auf seinen Ablagestapel."
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Fire Spin",
				'fr-fr': "Danse Flamme",
				'es-es': "Giro Fuego",
				'it-it': "Turbofuoco",
				'pt-br': "Chama Furacão",
				'de-de': "Feuerwirbel"
			},
			effect: {
				'en-us': "Discard 3 Energy from this Pokémon.",
				'fr-fr': "Défaussez 3 Énergies de ce Pokémon.",
				'es-es': "Descarta 3 Energías de este Pokémon.",
				'it-it': "Scarta tre Energie assegnate a questo Pokémon.",
				'pt-br': "Descarte 3 Energias deste Pokémon.",
				'de-de': "Lege 3 Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 180,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It is said to be the legendary bird Pokémon of fire. Every flap of its wings creates a dazzling flare of flames.",
	},

	thirdParty: {
		cardmarket: 368951,
		tcgplayer: 183790
	}
}

export default card
