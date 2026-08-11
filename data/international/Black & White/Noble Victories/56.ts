import { Card } from 'models/database/card'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		'en-us': "Beheeyem",
		'fr-fr': "Neitram",
		'es-es': "Beheeyem",
		'it-it': "Beheeyem",
		'pt-br': "Beheeyem",
		'de-de': "Megalon"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		606,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Elgyem",
		'fr-fr': "Lewsor",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Synchronoise",
				'fr-fr': "Synchropeine",
			},
			effect: {
				'en-us': "Does 20 damage to each of your opponent's Benched Pokémon that shares a type with the Defending Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 20 dégâts à chacun des Pokémon de Banc de votre adversaire ayant un type en commun avec le Pokémon Défenseur.  (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Psyshot",
				'fr-fr': "Piqûre Psy",
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It uses psychic power to control an opponent's brain and tamper with its memories.",
	},

	thirdParty: {
		cardmarket: 280179,
		tcgplayer: 83778
	}
}

export default card
