import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Celio's Network",
		fr: "Le réseau de Cileo",
		de: "Celios Netzwerk"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Search your deck for a Basic Pokémon or Evolution card (excluding Pokémon-ex), show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
		fr: "Cherchez dans votre deck un Pokémon de base ou une carte Évolution (sauf les Pokémon-ex), montrez la carte à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck.",
		de: "Search your deck for a Basic Pokémon or Evolution card (excluding Pokémon-ex ), show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276264,
				tcgplayer: 84154
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 276264,
				tcgplayer: 84154
			},
		},
		{
			type: "normal",
			stamp: ["takashi-yoneda"],
			thirdParty: {
				cardmarket: 871562,
				tcgplayer: 477500
			},
		},
		{
			type: "normal",
			stamp: ["jeremy-maron"],
			thirdParty: {
				cardmarket: 871560,
				tcgplayer: 477502
			},
		},
		{
			type: "normal",
			stamp: ["hiroki-yano"],
			thirdParty: {
				cardmarket: 869550,
				tcgplayer: 477602
			},
		},
		{
			type: "normal",
			stamp: ["jimmy-ballard"],
			thirdParty: {
				cardmarket: 869551,
				tcgplayer: 477603
			},
		},
		{
			type: 'normal',
			stamp: ['michael-gonzalez'],
			thirdParty: {
				cardmarket: 871561,
				tcgplayer: 477501,
			}
		}
	],
}

export default card
