import { Card } from 'models/database/card'
import Set from '../Black & White'

const card: Card = {
	name: {
		'en-us': "Lilligant",
		'fr-fr': "Fragilady",
		'es-es': "Lilligant",
		'it-it': "Lilligant",
		'pt-br': "Lilligant",
		'de-de': "Dressella"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		549,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Petilil",
		'fr-fr': "Chlorobule",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Petal Dance",
				'fr-fr': "Danse-Fleur",
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 30 damage times the number of heads. This Pokémon is now Confused.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face. Ce Pokémon est maintenant Confus.",
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Leaf Storm",
				'fr-fr': "Tempêteverte",
			},
			effect: {
				'en-us': "Heal 20 damage from each of your Grass Pokémon.",
				'fr-fr': "Soignez 20 dégâts à chacun de vos Pokémon Grass.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The fragrance of the garland on its head has a relaxing effect. It withers if a Trainer does not take good care of it.",
	},

	thirdParty: {
		cardmarket: 279748,
		tcgplayer: 86792
	}
}

export default card
