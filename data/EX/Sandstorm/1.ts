import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Armaldo",
		fr: "Armaldo",
		de: "Armaldo"
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
		en: "Anorith",
		fr: "Anorith"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Primal Veil",
				fr: "Voile primordial",
				de: "Primal Veil"
			},
			effect: {
				en: "As long as Armaldo is your Active Pokémon, each player can't play any Supporter Cards.",
				fr: "Tant qu'Armaldo est votre Pokémon Actif, ni vous ni votre adversaire ne pouvez jouer de cartes Supporter.",
				de: "As long as Armaldo is your Active Pokémon, each player can't play any Supporter cards."
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
				en: "Blade Arms",
				fr: "Bras tranchants",
				de: "Blade Arms"
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
