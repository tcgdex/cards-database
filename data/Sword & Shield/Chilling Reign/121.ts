import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	name: {
		en: "Castform",
		fr: "Morphéo"
	},

	illustrator: "Asako Ito",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 70,
	dexId: [351],

	types: [
		"Colorless",
	],

	stage: 'Basic',

	description: {
		en: 'This is Castform\'s form when caught in a hailstrom. Its\nwhole body is chilled, and its skin is partially frozen!',
		fr: 'Il n\'y a pas que son apparence qui change en\nfonction de la météo: son tempérament aussi !\nPlus il y a de vent, plus il se montre agressif.'
	},

	abilities: [{
		type: 'Ability',
		name: {
			en: 'Weather Reading',
			fr: 'Météorologie'
		},
		effect: {
			en: "If you have 8 or more Stadium cards in your discard pile, ignore all Energy in this Pokémon’s attack costs.",
			fr: "Si vous avez 8 cartes Stade ou plus dans votre pile de défausse, ignorez toutes les Énergies dans le coût des attaques de ce Pokémon.",
		}
	}],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Weather Force",
				fr: "Force Météo"
			},
			effect: {
				en: "Draw cards until you have 6 cards in your hand.",
				fr: "Piochez des cartes jusqu’à en avoir 6 en main.",
			},
			damage: 80
		}
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],


	retreat: 0,
	regulationMark: "E"
}

export default card
