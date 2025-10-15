import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Holon Ruins",
		fr: "Ruines Holon",
		de: "Holon-Ruinen"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est mise en jeu. Si une autre carte comportant le même nom est en jeu, vous ne pouvez pas jouer cette carte.\n\nChaque joueur ayant un Pokémon possédant le symbole δ en jeu peut piocher une carte une seule fois lors de son tour. Il ou elle défausse alors une carte de sa main.",
		de: "Each player that has any Pokémon in play that has Delta on its card may draw a card once during his or her turn. If the player does, he or she discards a cards from his or her hand."
	},

	thirdParty: {
		cardmarket: 276859,
		tcgplayer: 86151
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

