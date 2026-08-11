import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Armaldo",
		'fr-fr': "Armaldo",
		'de-de': "Armaldo"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [348],

	hp: 120,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Anorith",
		'fr-fr': "Anorith"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Primal Veil",
				'fr-fr': "Voile primordial",
				'de-de': "Primal Veil"
			},
			effect: {
				'en-us': "As long as Armaldo is your Active Pokémon, each player can't play any Supporter Cards.",
				'fr-fr': "Tant qu'Armaldo est votre Pokémon Actif, ni vous ni votre adversaire ne pouvez jouer de cartes Supporter.",
				'de-de': "As long as Armaldo is your Active Pokémon, each player can't play any Supporter cards."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Blade Arms",
				'fr-fr': "Bras tranchants",
				'de-de': "Blade Arms"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	
	retreat: 3,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275778,
				tcgplayer: 83619
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275778,
				tcgplayer: 83619
			}
		},
		{
			type: "holo",
			stamp: ["pre-release"],
			thirdParty: {
				cardmarket: 881759,
				tcgplayer: 282797
			}
		},
	],

}

export default card
