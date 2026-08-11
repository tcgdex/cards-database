import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Scolipede",
		'fr-fr': "Brutapode",
		'es-es': "Scolipede",
		'it-it': "Scolipede",
		'pt-br': "Scolipede",
		'de-de': "Cerapendra"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		545,
	],

	hp: 150,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Whirlipede",
		'fr-fr': "Scobolide",
		'es-es': "Whirlipede",
		'it-it': "Whirlipede",
		'pt-br': "Whirlipede",
		'de-de': "Rollum"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Random Peck",
				'fr-fr': "Coup d'Bec au Pif",
				'es-es': "Picotazo al Azar",
				'it-it': "Beccata Casuale",
				'pt-br': "Bicada Aleatória",
				'de-de': "Zufälliger Schnabelhieb"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 20 more damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
				'es-es': "Lanza 2 monedas. Este ataque hace 20 puntos de daño más por cada cara.",
				'it-it': "Lancia due volte una moneta. Ogni volta che esce testa, questo attacco infligge 20 danni in più.",
				'pt-br': "Jogue 2 moedas. Esse ataque causa 20 de danos adicionais para cada cara.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 20 weitere Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Poison Ring",
				'fr-fr': "Anneau de Poison",
				'es-es': "Anillo Venenoso",
				'it-it': "Velenanello",
				'pt-br': "Anel de Veneno",
				'de-de': "Giftring"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Poisoned. That Pokémon can't retreat during your opponent's next turn.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Ce dernier ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado. Ese Pokémon no puede retirarse durante el próximo turno de tu rival.",
				'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato. Durante il prossimo turno del tuo avversario, quel Pokémon non può ritirarsi.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado. Esse Pokémon não poderá recuar durante a próxima vez de jogar do seu oponente.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Dieses Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 70,

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
		'en-us': "It clasps its prey with the claws on its neck until it stops moving. Then it finishes it off with deadly poison.",
	},

	thirdParty: {
		cardmarket: 281390,
		tcgplayer: 88971
	}
}

export default card
