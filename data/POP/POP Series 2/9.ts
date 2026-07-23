import { Card } from '../../../interfaces'
import Set from '../POP Series 2'

const card: Card = {
	name: {
		en: "Multi Technical Machine 01",
		fr: "Machine multi-technique 01"
	},

	illustrator: '"Big Mama" Tagawa"Big Mama\" Tagawa',
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Paralyzing Gaze",
			},
			effect: {
				en: "Attach this card to 1 of your Pokémon in play. That Pokémon may use this card's attack instead of its own. At the end of your turn, discard Multi Technical Machine 01.",
			},
		},
	],
	trainerType: "Technical Machine",

	attacks: [{
		name: {
			en: "Paralyzing Gaze",
			fr: "Regard paralysant"
		},

		effect: {
			en: "The Defending Pokémon is now Paralyzed.",
			fr: "Le Pokémon Défenseur est maintenant Paralysé."
		},

		cost: ["Colorless"]
	}],

	effect: {
		en: "Attach this card to 1 of your Pokémon in play. That Pokémon may use this card’s attack instead of its own. At the end of your turn, discard Multi Technical Machine 01.",
		fr: "Attachez cette carte à 1 des Pokémon que vous avez en jeu. Ce Pokémon peut utiliser l'attaque de cette carte à la place de ses attaques. À la fin de votre tour, défaussez Machine multi-technique 01."
	},

	retreat: 0,
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87636,
				cardmarket: 277440
			},
		},
	],

}

export default card
