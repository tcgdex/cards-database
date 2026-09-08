import { Card } from 'models/database/card'
import Set from '../Fossil'

const card: Card = {
	name: {
		'en-us': "Zapdos",
		'fr-fr': "Élector",
		'de-de': "Zapdos"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		145,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				'en-us': "Thunderstorm",
				'fr-fr': "Orage",
				'de-de': "Thunderstorm"
			},
			effect: {
				'en-us': "For each of your opponent's Benched Pokémon, flip a coin. If heads, this attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Then, Zapdos does 10 damage times the number of tails to itself.",
				'fr-fr': "Pour chacun des Pokémon du Banc de votre adversaire, lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts au Pokémon concerné. (Ne pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc.) Ensuite, Élector s'inflige 10 dégâts pour chaque pile.",
				'de-de': "For each of your opponent's Benched Pokémon, flip a coin. IF heads, this attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Then, Zapdos does 10 damage times the number of tails to itself."
			},
			damage: 40,

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 2,


	description: {
		'en-us': "A legendary thunderbird Pokémon whose anger is said to cause storms. Some say it has lived above the clouds for thousands of years.",
		'fr-fr': "L'oiseau légendaire de la foudre. Il surgit hors des nuages en lançant d'énormes éclairs."
	},


	variants: [
		{
			type: "holo",
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273876,
				tcgplayer: 44424
			}
		},
		{
			type: "holo",
			subtype: "evolution-box-error",
			foil: "galaxy"
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273876,
				tcgplayer: 44424
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			subtype: "1999-2000-copyright"
		},
		{
			type: "holo",
			foil: "cosmos",
			subtype: "1999-copyright"
		}
	]
}

export default card
