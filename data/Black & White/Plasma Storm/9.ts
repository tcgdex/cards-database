import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Swadloon",
		fr: "Couverdure",
		es: "Swadloon",
		it: "Swadloon",
		pt: "Swadloon",
		de: "Folikon"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		541,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Sewaddle",
		fr: "Larveyette",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Swaddle Guard",
				fr: "Layette Protectrice",
			},
			effect: {
				en: "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 40 (after applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 40 (après application de la Faiblesse et de la Résistance).",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Surprise Attack",
				fr: "Attaque Surprise",
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 280749
	}
}

export default card
