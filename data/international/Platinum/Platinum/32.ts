import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Kricketune",
		'fr-fr': "Mélokrik",
		'de-de': "Zirpeise"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [402],

	hp: 90,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Kricketot",
		'fr-fr': "Crikzik"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Revenge Melody",
				'fr-fr': "Mélodie vengeresse",
				'de-de': "Revenge Melody"
			},
			effect: {
				'en-us': "Does 20 damage times the number of Kricketot and Kricketune in your discard pile.",
				'fr-fr': "Inflige 20 dégâts multipliés par le nombre de Crikzik et Mélokrik dans votre pile de défausse.",
				'de-de': "Does 20 damage times the number of Kricketot and Kricketune in your discard pile."
			},
			damage: "20×",

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Bug Buzz",
				'fr-fr': "Bourdon",
				'de-de': "Bug Buzz"
			},
			effect: {
				'en-us': "If the Defending Pokémon is Asleep, this attack does 50 damage plus 30 more damage. Remove the Special Condition Asleep from the Defending Pokémon.",
				'fr-fr': "Si le Pokémon Défenseur est Endormi, cette attaque inflige 50 dégâts plus 30 dégâts supplémentaires. Retirez-lui l'État Spécial Endormi.",
				'de-de': "If the Defending Pokémon is Asleep, this attack does 50 damage plus 30 more damage. Remove the Special Condition Asleep from the Defending Pokémon."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "There is a village that hosts a contest based on the amazingly variable cries of this Pokémon."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 86533,
				cardmarket: 278453
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278453,
				tcgplayer: 86533
			}
		}
	],

}

export default card
