import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Bidoof",
		fr: "Keunotor"
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
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Self-abandonment",
				fr: "S'abandonner",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage to the Defending Pokémon. If tails, Bidoof does 10 damage to itself.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts au Pokémon Défenseur. Si c'est pile, Keunotor s'inflige 10 dégâts.",
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
	}
}

export default card
