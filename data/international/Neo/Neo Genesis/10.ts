import { Card } from 'models/database/card'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		'en-us': "Meganium",
		'fr-fr': "Meganium",
		'de-de': "Meganie"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		154,
	],

	hp: 100,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Bayleef",
		'fr-fr': "Macronium"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'en-us': "Herbal Scent",
				'fr-fr': "Senteur de thé",
				'de-de': "Herbal Scent"
			},
			effect: {
				'en-us': "When you play Meganium from your hand, you may flip a coin. If heads, remove all damage counters from all Grass Pokémon in play.",
				'fr-fr': "Lorsque vous jouez Meganium depuis votre main, vous pouvez lancer une pièce. Si c'est face, retirez tous les marqueurs de dégâts sur les Pokémon  en jeu.",
				'de-de': "When you play Meganium from your hand, you may flip a coin. If heads, remove all damage counters from all  Pokémon in play."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Body Slam",
				'fr-fr': "Plaquage",
				'de-de': "Body Slam"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
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
	retreat: 3,


	description: {
		'en-us': "Meganium's breath has the power to revive dead grass and plants. It can make them healthy again.",
		'fr-fr': "Le souffle de Meganium peut redonner vie aux plantes mortes."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274410,
				tcgplayer: 87286
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274410,
				tcgplayer: 87286
			}
		}
	]
}

export default card
