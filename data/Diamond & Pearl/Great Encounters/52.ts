import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Seviper",
		fr: "Seviper",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		336,
	],
	hp: 80,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Tail Blade",
				fr: "Queue-guillotine",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent can't play any Trainer cards from his or her hand during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, votre adversaire ne peut pas jouer de cartes Dresseur de sa main lors de son prochain tour.",
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poison Tail",
				fr: "Queue-poison",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage plus 30 more damage and the Defending Pokémon is now Poisoned.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts plus 30 dégâts supplémentaires et le Pokémon Défenseur est maintenant Empoisonné.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 2,



}

export default card
