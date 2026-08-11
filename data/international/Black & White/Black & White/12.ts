import { Card } from 'models/database/card'
import Set from '../Black & White'

const card: Card = {
	name: {
		'en-us': "Maractus",
		'fr-fr': "Maracachi",
		'es-es': "Maractus",
		'it-it': "Maractus",
		'pt-br': "Maractus",
		'de-de': "Maracamba"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		556,
	],

	hp: 90,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Constant Rattle",
				'fr-fr': "Secousses Successives",
			},
			effect: {
				'en-us': "Flip 3 coins. If 1 of them is heads, this attack does 10 damage. If 2 of them are heads, this attack does 30 damage. If all of them are heads, this attack does 60 damage.",
				'fr-fr': "Lancez 3 pièces. Si vous obtenez un côté face, cette attaque inflige 10 dégâts. Si vous obtenez 2 côtés face, cette attaque inflige 30 dégâts. Si vous obtenez seulement des côtés face, cette attaque inflige 60 dégâts.",
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Giga Drain",
				'fr-fr': "Giga-Sangsue",
			},
			effect: {
				'en-us': "Heal from this Pokémon the same amount of damage you did to the Defending Pokémon.",
				'fr-fr': "Soignez à ce Pokémon la même quantité de dégâts que vous avez infligée au Pokémon Défenseur.",
			},
			damage: 50,

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

	retreat: 2,

	description: {
		'en-us': "Arid regions are their habitat. They move rhythmically, making a sound similar to maracas.",
	},

	thirdParty: {
		cardmarket: 279749,
		tcgplayer: 87188
	}
}

export default card
