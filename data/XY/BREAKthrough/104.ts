import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Florges BREAK",
		fr: "Florges TURBO",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		671,
	],
	hp: 140,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Florges",
		fr: "Florges",
	},
	stage: "BREAK",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Floral Breeze",
				fr: "Brise Florale",
			},
			effect: {
				en: "Once during your turn (before your attack), you may heal 30 damage and remove a Special Condition from your Active Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez soigner 30 dégâts et retirer un État Spécial de votre Pokémon Actif.",
			},
		},
	],
	attacks: [
		{

			name: {
				fr: "Règle des Évolutions TURBO",
			},


		},
	],






}

export default card
