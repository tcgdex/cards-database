import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Desert Ruins",
		fr: "Ruines désert",
		de: "Desert Ruins*"
	},

	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		en: "This card stays in play when you play it. Discard this card if another Stadium card comes into play. At any time between turns, each player puts 1 damage counter on his or her Pokémon-ex with maximum HP of at least 100.",
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez -la si une autre carte Stade est mise en jeu.",
		de: "At any time between turns, each player puts 1 damage counter on his or her Pokémon-ex with maximum HP of at least 100."
	},

	retreat: 0,
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84781,
				cardmarket: 276162
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 84781,
				cardmarket: 276162
			}
		},
		{
			type: "normal",
			stamp: ["miska-saari"],
			thirdParty: {
				cardmarket: 869588,
				tcgplayer: 477609
			}
		},
		{
			type: "normal",
			stamp: ["tsuguyoshi-yamato"],
			thirdParty: {
				cardmarket: 871876,
				tcgplayer: 477378
			}
		},
		{
			type: "normal",
			stamp: ["takashi-yoneda"],
			thirdParty: {
				cardmarket: 871568,
				tcgplayer: 477511
			}
		},
		{
			type: "normal",
			stamp: ["michael-gonzalez"],
			thirdParty: {
				cardmarket: 871567,
				tcgplayer: 477512
			}
		},
		{
			type: "normal",
			stamp: ["jeremy-maron"],
			thirdParty: {
				cardmarket: 871566,
				tcgplayer: 477513
			}
		},
	]
}

export default card
