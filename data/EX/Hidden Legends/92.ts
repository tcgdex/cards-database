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
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Draw a number of cards up to the number of your opponent's Pokémon in play. If you have more than 7 cards (including this one) in your hand, you can't play this card.",
		fr: "Vous pouvez piocher autant de cartes que votre adversaire possède de Pokémon en jeu.",
		de: "Draw a number of cards, up to the number of your opponent's Pokémon in play.\nIf you have more than 7 cards (including this one) in your hand, you can't play this card."
	},

	retreat: 0,
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89569,
				cardmarket: 276166
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 89569,
				cardmarket: 276166
			}
		},
		{
			type: "normal",
			stamp: ["miska-saari"],
			thirdParty: {
				cardmarket: 869569,
				tcgplayer: 477968
			}
		},
		{
			type: "normal",
			stamp: ["hiroki-yano"],
			thirdParty: {
				cardmarket: 869567,
				tcgplayer: 477966
			}
		},
		{
			type: "normal",
			stamp: ["jimmy-ballard"],
			thirdParty: {
				cardmarket: 869568,
				tcgplayer: 477967
			}
		},
		{
			type: "normal",
			stamp: ["tsuguyoshi-yamato"],
			thirdParty: {
				cardmarket: 871836,
				tcgplayer: 477434
			}
		},
		{
			type: "normal",
			stamp: ["reed-weichler"],
			thirdParty: {
				cardmarket: 871835,
				tcgplayer: 477435
			}
		},
		{
			type: "normal",
			stamp: ["kevin-nguyen"],
			thirdParty: {
				cardmarket: 871834,
				tcgplayer: 477436
			}
		},
		{
			type: "normal",
			stamp: ["chris-fulop"],
			thirdParty: {
				cardmarket: 871833,
				tcgplayer: 477433
			}
		},
		{
			type: "normal",
			stamp: ["jeremy-maron"],
			thirdParty: {
				cardmarket: 871552,
				tcgplayer: 477589
			}
		},
		{
			type: "normal",
			stamp: ["takashi-yoneda"],
			thirdParty: {
				cardmarket: 871554,
				tcgplayer: 477587
			}
		},
		{
			type: "normal",
			stamp: ["curran-hill"],
			thirdParty: {
				cardmarket: 871551,
				tcgplayer: 477586
			}
		},
		{
			type: "normal",
			stamp: ["michael-gonzalez"],
			thirdParty: {
				cardmarket: 871553,
				tcgplayer: 477588
			}
		},
	]
}

export default card
