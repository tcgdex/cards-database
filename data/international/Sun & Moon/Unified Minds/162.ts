import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Lickilicky",
		'fr-fr': "Coudlangue",
		'es-es': "Lickilicky",
		'it-it': "Lickilicky",
		'pt-br': "Lickilicky",
		'de-de': "Schlurplek"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		463,
	],

	hp: 130,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Lickitung",
		'fr-fr': "Excelangue",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Rollout",
				'fr-fr': "Roulade",
				'es-es': "Desenrollar",
				'it-it': "Rotolamento",
				'pt-br': "Rolagem",
				'de-de': "Walzer"
			},

			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Licks Go Crazy",
				'fr-fr': "Langue Acérée",
				'es-es': "A lo Loco",
				'it-it': "Leccate Pazze",
				'pt-br': "Lambidas Malucas",
				'de-de': "Schleckwahnsinn"
			},
			effect: {
				'en-us': "Discard a random card from your opponent’s hand, discard the top card of your opponent’s deck, and discard an Energy from your opponent’s Active Pokémon.",
				'fr-fr': "Défaussez au hasard une carte de la main de votre adversaire, défaussez la carte du dessus du deck de votre adversaire, et défaussez une Énergie du Pokémon Actif de votre adversaire.",
				'es-es': "Descarta 1 carta aleatoria de la mano de tu rival, descarta la primera carta de la baraja de tu rival y descarta 1 Energía del Pokémon Activo de tu rival.",
				'it-it': "Scarta una carta a caso dalla mano del tuo avversario, scarta la prima carta del suo mazzo e scarta un’Energia assegnata al suo Pokémon attivo.",
				'pt-br': "Descarte 1 carta aleatória da mão do seu oponente, descarte a primeira carta do baralho do seu oponente e descarte 1 Energia do Pokémon Ativo do seu oponente.",
				'de-de': "Lege 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel, lege die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel und lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},
			damage: 90,

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
		'en-us': "A contest is under way to determine which one can stick its tongue out the farthest. The current record is…more than 82 feet.",
	},

	thirdParty: {
		cardmarket: 388597,
		tcgplayer: 195162
	}
}

export default card
