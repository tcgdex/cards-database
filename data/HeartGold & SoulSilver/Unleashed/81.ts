import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Pokémon Circulator",
		fr: "Circulateur de Pokémon",
		de: "Pokémon-Kreislauf"
	},

	illustrator: "Hideaki Hakozaki",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Votre adversaire échange son Pokémon Actif avec l’un des Pokémon de son Banc.",
		en: "Your opponent switches his or her Active Pokémon with 1 of his or her Benched Pokémon.",
		de: "Dein Gegner tauscht sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank aus."
	},

	trainerType: "Item",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279237,
				tcgplayer: 88216
			}
		},
	],
}

export default card
