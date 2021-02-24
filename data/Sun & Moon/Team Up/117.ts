import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Dratini",
		fr: "Minidraco",
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		147,
	],
	hp: 70,
	types: [
		"Dragon",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Defensive Scales",
				fr: "Écailles Défensives",
			},
			effect: {
				en: "Prevent all effects of your opponent's attacks, except damage, done to this Pokémon.",
				fr: "Évitez tous les effets des attaques de votre adversaire, à l’exception des dégâts, infligés à ce Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Rain Splash",
				fr: "Pluie Éclaboussante",
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
