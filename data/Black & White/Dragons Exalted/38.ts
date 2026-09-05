import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Mareep",
		fr: "Wattouat",
		es: "Mareep",
		it: "Mareep",
		pt: "Mareep",
		de: "Voltilamm"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		179,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Cotton Guard",
				fr: "Cotogarde",
				de: "Watteschild"
			},
			effect: {
				en: "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				de: "Während des nächsten Zuges deines Gegners wird Schaden, der diesem Pokémon durch Angriffe zugefügt wird, um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Thunder Jolt",
				fr: "Secousse Tonnerre",
				de: "Donnerrüttler"
			},
			effect: {
				en: "Flip a coin. If tails, this Pokémon does 10 damage to itself.",
				fr: "Lancez une pièce. Si c'est pile, ce Pokémon s'inflige 10 dégâts.",
				de: "Wirf 1 Münze. Bei „Zahl“ fügt sich dieses Pokémon selbst 10 Schadenspunkte zu."
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

	retreat: 1,

	description: {
		en: "Its fluffy coat swells to double when static electricity builds up. Touching it can be shocking.",
		de: "Sein weiches Fell wird doppelt so dick, wenn sich Elektrizität aufbaut."
	},

	thirdParty: {
		cardmarket: 280477,
		tcgplayer: 87208
	}
}

export default card
