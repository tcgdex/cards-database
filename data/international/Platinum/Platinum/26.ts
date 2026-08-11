import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Empoleon",
		'fr-fr': "Pingoléon",
		'de-de': "Impoleon"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [395],

	hp: 130,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Prinplup",
		'fr-fr': "Prinplouf"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Knock Off",
				'fr-fr': "Sabotage",
				'de-de': "Knock Off"
			},
			effect: {
				'en-us': "Choose 1 card from your opponent's hand without looking and discard it.",
				'fr-fr': "Choisissez sans regarder 1 carte de la main de votre adversaire et défaussez-la.",
				'de-de': "Choose 1 card from your opponent's hand without looking and discard it."
			},
			damage: 40,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Jet Smash",
				'fr-fr': "Éclat'jet",
				'de-de': "Jet Smash"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 70 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Empoleon can't use Jet Smash during your next turn.",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 70 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.) Pingoléon ne peut pas utiliser Écras'jet lors de votre prochain tour.",
				'de-de': "Choose 1 of your opponent's Pokémon. This attack does 70 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Empoleon can't use Jet Smash during your next turn."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+30"
		},
	],

	retreat: 2,

	description: {
		'en-us': "If anyone were to hurt its pride, it would slash them with wings that can cleave through an ice floe."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 85200,
				cardmarket: 278447
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278447,
				tcgplayer: 85200
			}
		}
	],

}

export default card
