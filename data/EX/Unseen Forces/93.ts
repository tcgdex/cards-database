import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Warp Point",
		fr: "Point d'échange",
		de: "Wurmloch"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		en: "Your opponent switches 1 of his or her Defending Pokémon with 1 of his or her Benched Pokémon, if any. You switch 1 of your Active Pokémon with 1 of your Benched Pokémon, if any.",
		fr: "Votre adversaire échange 1 de ses Pokémon Défenseurs avec 1 de ses Pokémon de Banc, s'il en a. Vous échangez 1 de vos Pokémon Actifs avec 1 de vos Pokémon de Banc, si vous en avez.",
		de: "Your opponent switches 1 of his or her Defending Pokémon with 1 of his or her Benched Pokémon, if any. You switch 1 of your Active Pokémon with 1 of your Benched Pokémon, if any."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90479,
				cardmarket: 276739
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 90479,
				cardmarket: 276739
			},
		},
		{
			type: "normal",
			stamp: ["hiroki-yano"],
			thirdParty: {
				tcgplayer: 477976,
				cardmarket: 869570
			},
		},
		{
			type: "normal",
			stamp: ["miska-saari"],
			thirdParty: {
				tcgplayer: 477977,
				cardmarket: 869571
			},
		}
	],
}

export default card
