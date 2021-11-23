import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Swalot",
		fr: "Avaltout",
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		317,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Gulpin",
		fr: "Schluppuck",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Swallow Up",
				fr: "Engloutir",
			},
			effect: {
				en: "Before doing damage, count the remaining HP of the Defending Pokémon and Swalot. If the Defending Pokémon has fewer remaining HP than Swalot's, this attack does 80 damage instead.",
				fr: "Avant d'infliger des dégâts, comptez le nombre de PV restants au Pokémon Défenseur ainsi qu'à Avaltout. Si le Pokémon Défenseur possède moins de PV qu'Avaltout, cette attaque inflige 80 dégâts.",
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Gunk Shot",
				fr: "Détricanon",
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 2,

	description: {
		fr: "Il avale tout en une bouchée. Ses follicules sécrètent des fluides toxiques qui endorment l'ennemi."
	}
}

export default card
