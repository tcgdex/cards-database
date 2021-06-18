import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	name: {
		en: "Castform Snowy Form",
		fr: "Morphéo Forme Blizzard"
	},

	illustrator: "miki kudo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 70,
	dexId: [351],

	types: [
		"Water",
	],

	stage: 'Basic',

	description: {
		en: 'This is Castform\'s form when caught in a hailstrom. Its\nwhole body is chilled, and its skin is partially frozen!',
		fr: 'Morphéo adopte cette apparence quand\n il est frappé par la grèle. Tout son corps est froid et sa peau est légèrement givrée.'
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
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Frosty Typhoon",
				fr: "Typhon Givré"
			},
			effect: {
				en: "During your next turn, this Pokémon can’t use Frosty Typhoon.",
				fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Typhon Givré."
			},
			damage: 120
		}
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],


	retreat: 0,
	regulationMark: "E"
}

export default card
