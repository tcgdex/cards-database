import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Exeggutor",
		fr: "Noadkoko",
		es: "Exeggutor",
		it: "Exeggutor",
		pt: "Exeggutor",
		de: "Kokowei"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		103,
	],

	hp: 120,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Exeggcute",
		fr: "Noeunoeuf",
		es: "Exeggcute",
		it: "Exeggcute",
		pt: "Exeggcute",
		de: "Owei"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Shake It Off",
				fr: "Bon Débarras",
				es: "Espantar",
				it: "Scrollavia",
				pt: "Deixar de lado",
				de: "Ausschütteln"
			},
			effect: {
				en: "This attack does 20 damage times the number of Colorless Pokémon your opponent has in play.",
				fr: "Cette attaque inflige 20 dégâts multipliés par le nombre de Pokémon Colorless que votre adversaire a en jeu.",
				es: "Este ataque hace 20 puntos de daño por cada carta de Pokémon Colorless que tu rival tenga en juego.",
				it: "Questo attacco infligge 20 danni per ogni Pokémon Colorless che il tuo avversario ha in gioco.",
				pt: "Este ataque causa 20 de danos vezes o número de Pokémon Colorless que o seu oponente tem em jogo.",
				de: "Dieser Angriff fügt 20 Schadenspunkte für jedes Colorless-Pokémon, das dein Gegner im Spiel hat, zu."
			},
			damage: "20×",

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Seed Bomb",
				fr: "Canon Graine",
				es: "Bomba Germen",
				it: "Semebomba",
				pt: "Bomba de Sementes",
				de: "Samenbomben"
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 282670
	}
}

export default card
