import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Rhydon",
		'fr-fr': "Rhinoféros",
		'es-es': "Rhydon",
		'it-it': "Rhydon",
		'pt-br': "Rhydon",
		'de-de': "Rizeros"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		112,
	],

	hp: 100,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Rhyhorn",
		'fr-fr': "Rhinocorne",
		'es-es': "Rhyhorn",
		'it-it': "Rhyhorn",
		'pt-br': "Rhyhorn",
		'de-de': "Rihorn"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Horn Drill",
				'fr-fr': "Empal'Korne",
				'es-es': "Perforador",
				'it-it': "Perforcorno",
				'pt-br': "Chifre Broca",
				'de-de': "Hornbohrer"
			},

			damage: 50,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Mad Mountain",
				'fr-fr': "Montagne Enragée",
				'es-es': "Montaña Enloquecida",
				'it-it': "Montepazzo",
				'pt-br': "Montanha Louca",
				'de-de': "Berg des Zorns"
			},
			effect: {
				'en-us': "Flip 2 coins. If both are heads, discard the top card of your opponent's deck for each damage counter on this Pokémon.",
				'fr-fr': "Lancez 2 pièces. Si vous obtenez 2 côtés face, défaussez la carte du dessus du deck de votre adversaire pour chaque marqueur de dégâts placé sur ce Pokémon.",
				'es-es': "Lanza 2 monedas. Si ambas son cara, descarta la primera carta de la baraja de tu rival por cada contador de daño en este Pokémon.",
				'it-it': "Lancia due volte una moneta. Se esce entrambe le volte testa, scarta una carta in cima al mazzo del tuo avversario per ogni segnalino danno presente su questo Pokémon.",
				'pt-br': "Jogue 2 moedas. Se ambas forem cara, descarte o card de cima do baralho do seu oponente para cada contador de danos neste Pokémon.",
				'de-de': "Wirf 2 Münzen. Zeigen beide \"Kopf\", lege für jede Schadensmarke auf diesem Pokémon die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Protected by an armor-like hide, it is capable of living in molten lava of 3,600 degrees Fahrenheit.",
	},

	thirdParty: {
		cardmarket: 281398,
		tcgplayer: 88736
	}
}

export default card
