import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Cobalion",
		fr: "Cobaltium",
	},
	illustrator: "kirisAki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		638,
	],
	hp: 120,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Quick Guard",
				fr: "Prévention",
			},
			effect: {
				en: "Prevent all damage done to this Pokémon by attacks from Basic Pokémon during your opponent’s next turn. This Pokémon can’t use Quick Guard during your next turn.",
				fr: "Évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon de base pendant le prochain tour de votre adversaire. Ce Pokémon ne peut pas utiliser Prévention pendant votre prochain tour.",
			},

		},
		{
			cost: [
				"Metal",
				"Metal",
			],
			name: {
				en: "Revenge Blast",
				fr: "Explo-Vengeance",
			},
			effect: {
				en: "This attack does 30 more damage for each Prize card your opponent has taken.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque carte Récompense que votre adversaire a récupérée.",
			},
			damage: "30+",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
