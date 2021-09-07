import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Elekid",
		fr: "Elekid",
	},

	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		239,
	],

	hp: 30,

	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Sweet Sleeping Face",
				fr: "Joli visage endormi",
			},
			effect: {
				en: "As long as Elekid is Asleep, prevent all damage done to Elekid by attacks.",
				fr: "Tant qu'Elekid est Endormi, empêchez tous les dégâts qui lui sont infligés par des attaques.",
			},
		},
	],

	attacks: [
		{

			name: {
				en: "Sparking Ball",
				fr: "Boule étincelante",
			},
			effect: {
				en: "Choose 1 of your opponent’s Pokémon. This attack does 20 damage to that Pokémon. This attack’s damage isn’t affected by Weakness or Resistance. Elekid is now Asleep.",
				fr: "Choisissez l'un des Pokémon de votre adversaire. Cette attaque inflige 20 dégâts à ce Pokémon. Les dégâts infligés par cette attaque ne sont pas affectés par la Faiblesse ou la Résistance. Elekid est maintenant Endormi.",
			},

		},
	],

	retreat: 0
}

export default card
