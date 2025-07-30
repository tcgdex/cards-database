import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Island Cave",
		fr: "Grotte island",
		de: "Island Cave*"
	},

	illustrator: "Ken Ikugi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est mise en jeu.\n\nDès qu'un Joueur attache une carte Énergie de sa main à un Pokémon ,  ou , retirez à ce Pokémon tout État Spécial.",
		de: "Whenever any player attaches an Energy card from his or her hand to  Pokémon,  Pokémon, or  Pokémon, remove any Special Conditions from that Pokémon."
	},

	thirdParty: {
		cardmarket: 276163
	}
}

export default card
