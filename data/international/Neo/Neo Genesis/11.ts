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
				'en-us': "Wild Growth",
				'fr-fr': "Luxuriance",
				'de-de': "Wild Growth"
			},
			effect: {
				'en-us': "As long as Meganium is in play, each Grass Energy card attached to your Grass Pokémon instead provides GrassGrass. This power stops working while Meganium is Asleep, Confused, or Paralyzed.",
				'fr-fr': "Aussi longtemps que Meganium est en jeu, chaque carte Énergie  attachée à vos Pokémon  fournit  . Ce pouvoir disparaît pendant que Meganium est Endormi, Confus ou Paralysé.",
				'de-de': "As long as Meganium is in play, each  Energy card attached to your  Pokémon instead provides . This power stops working while Meganium is Asleep, Confused, or Paralyzed."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Soothing Scent",
				'fr-fr': "Senteur apaisante",
				'de-de': "Soothing Scent"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "The Defending Pokémon is now Asleep."
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
		'en-us': "The aroma that rises from its petals contains a substance that calms aggressive feelings.",
		'fr-fr': "Les arômes qui s'élèvent de ses pétales contiennent des substances qui effacent les sentiments agressifs."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274410,
				tcgplayer: 87287
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274410,
				tcgplayer: 87287
			}
		}
	]
}

export default card
