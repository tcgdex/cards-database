import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Croagunk",
		fr: "Cradopaud"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		453,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Ghastly Sound",
				fr: "Son affreux"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent can't play any Supporter cards from his or her hand during his or her next turn.",
				fr: "Lancez une pièce. Si c'est face, votre adversaire ne peut pas jouer de cartes Supporter de sa main lors de son prochain tour."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Finger Poke",
				fr: "Du bout du doigt"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	description: {
		fr: "Ses joues contiennent des glandes toxiques. Il attaque par surprise et utilise son toucher empoisonné."
	}
}

export default card
