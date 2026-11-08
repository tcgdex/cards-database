import { Card } from 'models/database/card'
import Set from '../Generations'

const card: Card = {
	name: {
		'en-us': "Butterfree",
		'fr-fr': "Papilusion",
	},

	illustrator: "miki kudo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		12,
	],

	hp: 130,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Metapod",
		'fr-fr': "Chrysacier",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Quiver Dance",
				'fr-fr': "Papillodanse",
			},
			effect: {
				'en-us': "Search your deck for a basic Energy card and attach it to this Pokémon. Shuffle your deck afterward. If you attached Energy in this way, heal 40 damage from this Pokémon.",
				'fr-fr': "Cherchez une carte Énergie de base dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck. Si vous avez attaché de l'Énergie de cette façon, soignez 40 dégâts à ce Pokémon.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Gust",
				'fr-fr': "Tornade",
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It loves the honey of flowers and can locate flower patches that have even tiny amounts of pollen.",
	},

	thirdParty: {
		cardmarket: 288447,
		tcgplayer: 113663
	}
}

export default card
