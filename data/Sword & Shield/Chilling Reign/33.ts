import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	name: {
		en: "Castform Rainy Form",
		fr: "Morphéo Forme Eau de Pluie"
	},

	illustrator: "sowsow",
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
		en: 'This is Castform\'s form when pelted by rain. In an\n experiment where it was placed in a shower,\n this Pokémon didn\'t change to this form.',
		fr: 'Morphéo adopte cette apparence uniquement\n les jours de pluie. On a tenté de reproduire ce\nphénomène sous une douche, sans succès.'
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
				"Colorless",
			],
			name: {
				en: "Rainfall",
				fr: "Ondée"
			},
			effect: {
				en: "This attack does 20 damage to each of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 20 dégâts à chacun des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
			}
		}
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 0,
	regulationMark: "E"
}

export default card
