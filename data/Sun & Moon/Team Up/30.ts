import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Gyarados",
		fr: "Léviator",
		es: "Gyarados",
		it: "Gyarados",
		pt: "Gyarados",
		de: "Garados"
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
		en: "Magikarp",
		fr: "Magicarpe",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Distilled Blast",
				fr: "Explosion Distillée",
				es: "Explosión Destilada",
				it: "Stillabomba",
				pt: "Explosão Destilada",
				de: "Destillierter Schlag"
			},
			effect: {
				en: "Reveal the top 7 cards of your deck. This attack does 30 more damage times the amount of Water Energy you find there. Then, shuffle those Energy cards back into your deck and discard the other cards.",
				fr: "Montrez les 7 cartes du dessus de votre deck. Cette attaque inflige 30 dégâts supplémentaires multipliés par le nombre d’Énergies Water que vous y trouvez. Ensuite, mélangez ces cartes Énergie avec votre deck et défaussez les autres cartes.",
				es: "Enseña las 7 primeras cartas de tu baraja. Este ataque hace 30 puntos de daño más por cada Energía Water que encuentres entre ellas. Después, pon esas cartas de Energía de nuevo en tu baraja, barájalas todas y descarta el resto de cartas.",
				it: "Mostra le prime sette carte del tuo mazzo. Questo attacco infligge 30 danni in più per ogni Energia Water presente tra quelle carte. Poi rimischia quelle carte Energia nel tuo mazzo e scarta le altre carte.",
				pt: "Revele as 7 primeiras cartas do seu baralho. Este ataque causa 30 pontos de dano a mais vezes a quantidade de Energia Water que encontrar lá. Em seguida, embaralhe aquelas cartas de Energia de volta no seu baralho e descarte as demais cartas.",
				de: "Zeige deinem Gegner die obersten 7 Karten deines Decks. Diese Attacke fügt 30 Schadenspunkte mehr mal der Anzahl der Water-Energien zu, die du dort findest. Mische anschließend jene Energiekarten zurück in dein Deck und lege die anderen Karten auf deinen Ablagestapel."
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
				en: "Hyper Beam",
				fr: "Ultralaser",
				es: "Hiperrayo",
				it: "Iper Raggio",
				pt: "Hiper-raio",
				de: "Hyperstrahl"
			},
			effect: {
				en: "Discard an Energy from your opponent’s Active Pokémon.",
				fr: "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
				es: "Descarta 1 Energía del Pokémon Activo de tu rival.",
				it: "Scarta un’Energia assegnata al Pokémon attivo del tuo avversario.",
				pt: "Descarte 1 Energia do Pokémon Ativo do seu oponente.",
				de: "Lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
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



}

export default card
