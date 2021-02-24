import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Lapras",
		fr: "Lokhlass",
	},
	illustrator: "Sekio",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		131,
	],
	hp: 120,
	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Go for a Swim",
				fr: "Piquer une Tête",
			},
			effect: {
				en: "Once during your turn (before your attack), you may look at the top 2 cards of your deck and put them back in any order.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez regarder les 2 cartes du dessus de votre deck et les replacer dans l’ordre de votre choix.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Ice Beam",
				fr: "Laser Glace",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
