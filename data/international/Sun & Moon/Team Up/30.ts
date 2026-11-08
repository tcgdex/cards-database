import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Gyarados",
		'fr-fr': "Léviator",
		'es-es': "Gyarados",
		'it-it': "Gyarados",
		'pt-br': "Gyarados",
		'de-de': "Garados"
	},

	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		130,
	],

	hp: 150,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Magikarp",
		'fr-fr': "Magicarpe",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Distilled Blast",
				'fr-fr': "Explosion Distillée",
				'es-es': "Explosión Destilada",
				'it-it': "Stillabomba",
				'pt-br': "Explosão Destilada",
				'de-de': "Destillierter Schlag"
			},
			effect: {
				'en-us': "Reveal the top 7 cards of your deck. This attack does 30 more damage times the amount of Water Energy you find there. Then, shuffle those Energy cards back into your deck and discard the other cards.",
				'fr-fr': "Montrez les 7 cartes du dessus de votre deck. Cette attaque inflige 30 dégâts supplémentaires multipliés par le nombre d’Énergies Water que vous y trouvez. Ensuite, mélangez ces cartes Énergie avec votre deck et défaussez les autres cartes.",
				'es-es': "Enseña las 7 primeras cartas de tu baraja. Este ataque hace 30 puntos de daño más por cada Energía Water que encuentres entre ellas. Después, pon esas cartas de Energía de nuevo en tu baraja, barájalas todas y descarta el resto de cartas.",
				'it-it': "Mostra le prime sette carte del tuo mazzo. Questo attacco infligge 30 danni in più per ogni Energia Water presente tra quelle carte. Poi rimischia quelle carte Energia nel tuo mazzo e scarta le altre carte.",
				'pt-br': "Revele as 7 primeiras cartas do seu baralho. Este ataque causa 30 pontos de dano a mais vezes a quantidade de Energia Water que encontrar lá. Em seguida, embaralhe aquelas cartas de Energia de volta no seu baralho e descarte as demais cartas.",
				'de-de': "Zeige deinem Gegner die obersten 7 Karten deines Decks. Diese Attacke fügt 30 Schadenspunkte mehr mal der Anzahl der Water-Energien zu, die du dort findest. Mische anschließend jene Energiekarten zurück in dein Deck und lege die anderen Karten auf deinen Ablagestapel."
			},
			damage: "30+",

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				'en-us': "Hyper Beam",
				'fr-fr': "Ultralaser",
				'es-es': "Hiperrayo",
				'it-it': "Iper Raggio",
				'pt-br': "Hiper-raio",
				'de-de': "Hyperstrahl"
			},
			effect: {
				'en-us': "Discard an Energy from your opponent’s Active Pokémon.",
				'fr-fr': "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
				'es-es': "Descarta 1 Energía del Pokémon Activo de tu rival.",
				'it-it': "Scarta un’Energia assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Descarte 1 Energia do Pokémon Ativo do seu oponente.",
				'de-de': "Lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "It fires hyper beams in all directions, burning the surrounding area to ash. There are some regions where it's called \"the deity of destruction.\"",
	},

	thirdParty: {
		cardmarket: 368962,
		tcgplayer: 183801
	}
}

export default card
