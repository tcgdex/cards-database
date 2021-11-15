import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Venusaur",
		fr: "Florizarre"
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		3,
	],
	hp: 110,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Ivysaur",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Chlorophyll",
				fr: "Chlorophyle"
			},
			effect: {
				en: "All Energy cards that provide only Colorless Energy attached to your Grass Pokémon provide Grass Energy instead.",
				fr: "Toutes les cartes Énergie fournissant uniquement de l'Énergie  attachées à vos Pokémon  fournissent de l'Énergie ."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Green Blast",
				fr: "Explosion verte"
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each Grass Energy attached to all of your Pokémon.",
				fr: "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque Énergie  attachée à tous vos Pokémon."
			},
			damage: "20+",

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Toxic Sleep",
				fr: "Dodo toxik"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep and Poisoned. Put 2 damage counters instead of 1 on the Defending Pokémon between turns.",
				fr: "Le Pokémon Défenseur est maintenant Endormi et Empoisonné. Placez 2 marqueurs de dégât au lieu d'1 sur le Pokémon Défenseur entre deux tours."
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
