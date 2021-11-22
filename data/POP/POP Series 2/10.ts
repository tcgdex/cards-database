import { Card } from '../../../interfaces'
import Set from '../POP Series 2'

const card: Card = {
	name: {
		en: "Pokémon Park",
		fr: "Parc Pokémon"
	},

	illustrator: "Kazuo Yazawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		en: "Once during each player’s turn, when that player attaches an Energy card from his or her hand to 1 of his or her Benched Pokémon, he or she removes 1 damage counter from that Pokémon.",
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est mise en jeu.\n\nUne seule fois lors du tour de chaque joueur, lorsqu'un joueur attache une carte Énergie de sa main à 1 des Pokémon de son Banc, il retire à ce Pokémon 1 marqueur de dégât."
	},

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	}
}

export default card
