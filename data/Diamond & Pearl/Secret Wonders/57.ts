import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Nidorino",
		fr: "Nidorino",
		de: "Nidorino"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		33,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Nidoran?",
		fr: "Nidoran♂",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Spirited Drill",
				fr: "Perceuse vigoureuse",
				de: "Energischer Bohrer"
			},
			effect: {
				en: "During your next turn, each of Nidorino's attacks does 20 more damage to the Defending Pokémon (before applying Weakness and Resistance).",
				fr: "Lors de votre prochain tour, les attaques de Nidorino infligent 20 dégâts supplémentaires au Pokémon Défenseur (avant application de la Faiblesse et de la Résistance).",
				de: "In deinem nächsten Zug fügen Nidorinos Angriffe dem Verteidigenden Pokémon 20 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poison Horn",
				fr: "Corne empoisonnée",
				de: "Gifthorn"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Das Verteidigende Pokémon ist jetzt vergiftet."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 277810,
		tcgplayer: 87745
	}
}

export default card
