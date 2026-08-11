import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Wigglytuff",
		'fr-fr': "Grodoudou",
		'es-es': "Wigglytuff",
		'it-it': "Wigglytuff",
		'pt-br': "Wigglytuff",
		'de-de': "Knuddeluff"
	},

	illustrator: "Mizue",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		40,
	],

	hp: 100,

	types: [
		"Fairy",
	],

	evolveFrom: {
		'en-us': "Jigglypuff",
		'fr-fr': "Rondoudou",
		'es-es': "Jigglypuff",
		'it-it': "Jigglypuff",
		'pt-br': "Jigglypuff",
		'de-de': "Pummeluff"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Expand",
				'fr-fr': "Expansion",
				'es-es': "Expandir",
				'it-it': "Potenzia",
				'pt-br': "Expandir",
				'de-de': "Ausdehnen"
			},
			effect: {
				'en-us': "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 30 (after applying Weakness and Resistance).",
				'fr-fr': "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
				'es-es': "Durante el próximo turno de tu rival, cualquier daño infligido a este Pokémon por ataques se reduce en 30 (después de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il prossimo turno del tuo avversario, i danni inflitti a questo Pokémon dagli attacchi sono ridotti di 30, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Durante a próxima vez de jogar do seu oponente, qualquer dano causado a este Pokémon por ataques será reduzido em 30 (após a aplicação de Fraqueza e Resistência).",
				'de-de': "Während des nächsten Zuges deines Gegners wird Schaden, der diesem Pokémon durch Angriffe zugefügt wird, um 30 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double Slap",
				'fr-fr': "Torgnoles",
				'es-es': "Doble Bofetón",
				'it-it': "Doppiasberla",
				'pt-br': "Tapa Duplo",
				'de-de': "Duplexhieb"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 60 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 60 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 2 monedas. Este ataque hace 60 puntos de daño por cada cara.",
				'it-it': "Lancia due volte una moneta. Questo attacco infligge 60 danni ogni volta che esce testa.",
				'pt-br': "Jogue 2 moedas. Este ataque causa 60 de danos vezes o número de caras.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 60 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "60×",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "The body is soft and rubbery. When angered, it will suck in air and inflate itself to an enormous size.",
	},

	thirdParty: {
		cardmarket: 289887,
		tcgplayer: 117841
	}
}

export default card
