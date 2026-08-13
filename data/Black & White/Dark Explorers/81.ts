import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Chansey",
		fr: "Leveinard",
		es: "Chansey",
		it: "Chansey",
		pt: "Chansey",
		de: "Chaneira"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		113,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Continuous Tumble",
				fr: "Roulade Continue",
				de: "Dauerrollen"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 30 damage times the number of heads.",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
				de: "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis „Zahl“ kommt. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "A kindly Pokémon that lays highly nutritious eggs and shares them with injured Pokémon or people.",
		de: "Ein freundliches Pokémon, das seine nahrhaften Eier mit verletzten Pokémon und Menschen teilt."
	},

	thirdParty: {
		cardmarket: 280408,
		tcgplayer: 84179
	}
}

export default card
