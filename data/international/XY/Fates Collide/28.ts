import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Weezing",
		'fr-fr': "Smogogo",
		'es-es': "Weezing",
		'it-it': "Weezing",
		'pt-br': "Weezing",
		'de-de': "Smogmog"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		110,
	],

	hp: 110,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Koffing",
		'fr-fr': "Smogo",
		'es-es': "Koffing",
		'it-it': "Koffing",
		'pt-br': "Koffing",
		'de-de': "Smogon"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Balloon Bomb",
				'fr-fr': "Bombe Ballon",
				'es-es': "Bomba Globo",
				'it-it': "Pallone Bomba",
				'pt-br': "Balão Bomba",
				'de-de': "Ballonbombe"
			},
			effect: {
				'en-us': "Flip 2 coins. For each heads, discard 2 cards from the top of your opponent's deck.",
				'fr-fr': "Lancez 2 pièces. Pour chaque côté face, défaussez 2 cartes du dessus du deck de votre adversaire.",
				'es-es': "Lanza 2 monedas. Por cada cara, descarta las 2 primeras cartas de la baraja de tu rival.",
				'it-it': "Lancia due volte una moneta. Ogni volta che esce testa, scarta le prime due carte del mazzo del tuo avversario.",
				'pt-br': "Jogue 2 moedas. Para cada cara, descarte 2 cards de cima do baralho do seu oponente.",
				'de-de': "Wirf 2 Münzen. Lege pro \"Kopf\" 2 Karten vom Deck deines Gegners auf seinen Ablagestapel."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Thick Liquid",
				'fr-fr': "Liquide Épais",
				'es-es': "Líquido Espeso",
				'it-it': "Liquido Denso",
				'pt-br': "Líquido Denso",
				'de-de': "Zähe Flüssigkeit"
			},
			effect: {
				'en-us': "Both Active Pokémon are now Confused and Poisoned.",
				'fr-fr': "Les deux Pokémon Actifs sont maintenant Confus et Empoisonnés.",
				'es-es': "Ambos Pokémon Activos pasan a estar Confundidos y Envenenados.",
				'it-it': "Entrambi i Pokémon attivi vengono confusi e avvelenati.",
				'pt-br': "Ambos os Pokémon Ativos agora estão Confusos e Envenenados.",
				'de-de': "Beide Aktiven Pokémon sind jetzt verwirrt und vergiftet."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Very rarely, a sudden mutation can result in two small Koffing twins becoming conjoined as a Weezing.",
	},

	thirdParty: {
		cardmarket: 289854,
		tcgplayer: 117788
	}
}

export default card
