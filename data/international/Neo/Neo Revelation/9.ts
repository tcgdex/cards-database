import { Card } from 'models/database/card'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		'en-us': "Jumpluff",
		'fr-fr': "Cotovol",
		'de-de': "Papungha"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		189,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Skiploom",
		'fr-fr': "Floravol"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Evolutionary Spore",
				'fr-fr': "Spore évolutionnaire",
				'de-de': "Evolutionary Spore"
			},
			effect: {
				'en-us': "Choose any number of your Hoppips and Skiplooms. Then, for each Pokémon you chose in this way, you may search your deck for a card that evolves from that Pokémon and attach it to that Pokémon. (This counts as evolving those Pokémon.) Shuffle your deck afterward.",
				'fr-fr': "Choisissez dans vos Granivol et Floravol en jeu le nombre de Pokémon désiré. Puis, pour chaque Pokémon choisi, vous pouvez chercher une carte évolution de ce Pokémon dans votre deck et l'attacher à ce Pokémon. (Cela revient à faire évoluer tous ces Pokémon). Mélangez ensuite votre deck.",
				'de-de': "Choose any number of your Hoppips and Skiplooms. Then, for each Pokémon you chose in this way, you may search your deck for a card that evolves from that Pokémon and attach it to that Pokémon. (This counts as evolving those Pokémon.) Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Solarbeam",
				'fr-fr': "Lance-Soleil",
				'de-de': "Solarbeam"
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
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		'en-us': "Drifts on seasonal winds and spreads its cotton-like spores all over the world to make more offspring.",
		'fr-fr': "Il dérive au gré des vents saisonniers et sème ses spores cotonneuses dans le monde entier pour se reproduire."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274595,
				tcgplayer: 86362
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274595,
				tcgplayer: 86362
			}
		}
	]
}

export default card
