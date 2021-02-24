import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Pachirisu",
		fr: "Pachirisu",
	},
	illustrator: "Mizue",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		417,
	],
	hp: 70,
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
				en: "Trick Sticker",
				fr: "Colle-Farce",
			},
			effect: {
				en: "The Defending Pokémon's Weakness is now Lightning until the end of your next turn. (The amount of Weakness doesn't change.)",
				fr: "La Faiblesse du Pokémon Défenseur est maintenant Lightning jusqu'à la fin de votre prochain tour. (La valeur de la Faiblesse ne change pas.)",
			},
			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Pachi",
				fr: "Pachi",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
