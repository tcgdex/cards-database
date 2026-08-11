import { Card } from 'models/database/card'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		'en-us': "Kricketune",
		'fr-fr': "Mélokrik",
		'es-es': "Kricketune",
		'it-it': "Kricketune",
		'pt-br': "Kricketune",
		'de-de': "Zirpeise"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		402,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Kricketot",
		'fr-fr': "Crikzik",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "White Noise",
				'fr-fr': "Sommeil Profond",
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Draining Cut",
				'fr-fr': "Vampitranche",
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 40 damage times the number of heads. Heal from this Pokémon the same amount of damage you did to the Defending Pokémon.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face. Soignez à ce Pokémon la même quantité de dégâts que vous avez infligée au Pokémon Défenseur.",
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

	retreat: 1,

	description: {
		'en-us': "There is a village that hosts a contest based on the amazingly variable cries of this Pokémon.",
	},

	thirdParty: {
		cardmarket: 280229,
		tcgplayer: 86535
	}
}

export default card
