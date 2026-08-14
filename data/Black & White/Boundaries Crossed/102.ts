import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "White Kyurem",
		fr: "Kyurem Blanc",
		es: "Kyurem Blanco",
		it: "Kyurem Bianco",
		pt: "Kyurem Branco",
		de: "Weißes Kyurem"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		646,
	],

	hp: 130,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Damage Rush",
				fr: "Charge Destructrice",
				de: "Schadensrausch"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 20 damage times the number of heads.",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
				de: "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis „Zahl“ kommt. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cold Fire",
				fr: "Flammes de Glace",
				de: "Eisbrand"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 40 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts supplémentaires.",
				de: "Wirf 1 Münze. Bei „Kopf“ fügt dieser Angriff 40 weitere Schadenspunkte zu."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "This legendary ice Pokémon waits for a hero to fill in the missing parts of its body with truth or ideals.",
		de: "Ein Legendäres Eis-Pokémon, das auf den Helden wartet, der seinen verstümmelten Körper mit Wunsch und Wirklichkeit heilt."
	},

	thirdParty: {
		cardmarket: 280689,
		tcgplayer: 90586
	}
}

export default card
