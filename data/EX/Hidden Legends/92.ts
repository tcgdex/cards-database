import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Steven's Advice",
		fr: "Les conseils de Pierre",
		de: "Steven's Advice*"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		fr: "Vous pouvez piocher autant de cartes que votre adversaire possède de Pokémon en jeu.",
		de: "Draw a number of cards, up to the number of your opponent's Pokémon in play.\nIf you have more than 7 cards (including this one) in your hand, you can't play this card.",
	},

	thirdParty: {
		cardmarket: 276166,
		tcgplayer: 89569
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "holo",
			foil: "energy",
		},
		{
			type: "normal",
			stamp: ["chris-fulop"]
		},
		{
			type: "normal",
			stamp: ["tsuguyoshi-yamato"]
		},
		{
			type: "normal",
			stamp: ["reed-weichler"]
		},
		{
			type: "normal",
			stamp: ["kevin-nguyen"]
		},
		{
			type: "normal",
			stamp: ["curran-hill"]
		},
		{
			type: "normal",
			stamp: ["takashi-yoneda"]
		},
		{
			type: "normal",
			stamp: ["michael-gonzalez"]
		},
		{
			type: "normal",
			stamp: ["jeremy-maron"]
		},
		{
			type: "normal",
			stamp: ["hiroki-yano"]
		},
		{
			type: "normal",
			stamp: ["jimmy-ballard"]
		}
	]
}

export default card
