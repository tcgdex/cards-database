import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Wurmple",
		fr: "Chenipotte",
		de: "Waumpel"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		265,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Needling Sting",
				fr: "Piqûre piquante",
				de: "Nadelstiche"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires.",
				de: "Wirf 1 Münze. Bei 'Kopf' fügt dieser Angriff 10 Schadenspunkte plus 10 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "String Shot",
				fr: "Sécrétion",
				de: "Fadenschuss"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf 1 Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		fr: "Il adore manger des feuilles. Si un Etourmi l'attaque, il riposte avec les piquants de son postérieur."
	},

	thirdParty: {
		cardmarket: 277603
	}
}

export default card
