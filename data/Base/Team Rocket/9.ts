import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Dark Hypno",
		fr: "Hypnomade obscur"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		97,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Drowzee",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Psypunch",
				fr: "Coup de poing psy"
			},

			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Bench Manipulation",
				fr: "Manipulation de Banc"
			},
			effect: {
				en: "Your opponent flips a number of coins equal to the number of Pokémon on his or her Bench. This attack does 20 damage times the number of tails. Don't apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)",
				fr: "Votre adversaire lance un nombre de pièces égal au nombre de Pokémon sur son Banc. Cette attaque inflige 20 dégâts multipliés par le nombre de piles. N'appliquez pas la Faiblesse et la Résistance à cette attaque. (Tous les autres effets ayant lieu après application de la Faiblesse et de la Résistance subsistent)."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "Il porte toujours un pendule. Il apparaît parfois au crépuscule aux abords des routes peu fréquentées et des écoles."
	}
}

export default card
