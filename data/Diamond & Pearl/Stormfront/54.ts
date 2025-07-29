import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Bidoof",
		fr: "Keunotor",
		de: "Bidiza"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		399,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	evolveFrom: {
		fr: "Keunotor",
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Yawn",
				fr: "Baillement",
				de: "Gähnen"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "Das Verteidigende Pokémon schläft jetzt."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Self-abandonment",
				fr: "S'abandonner",
				de: "Selbstlosigkeit"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage to the Defending Pokémon. If tails, Bidoof does 10 damage to itself.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts au Pokémon Défenseur. Si c'est pile, Keunotor s'inflige 10 dégâts.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff dem Verteidigenden Pokémon 30 Schadenspunkte zu. Bei \"Zahl\" fügt Bidiza sich selbst 10 Schadenspunkte zu."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	retreat: 2,

	description: {
		fr: "Rien ne peut perturber ses nerfs d'acier. Il est plus agile et énergique qu'il y paraît."
	},

	thirdParty: {
		cardmarket: 278352
	}
}

export default card
