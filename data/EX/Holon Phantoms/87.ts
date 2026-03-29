import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Holon Lake",
		fr: "Lac Holon",
		de: "Holon-See"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		fr: "Les Pokémon de chaque joueur possédant le symbole δ peuvent utiliser les attaques de cette carte à la place des leurs.",
		de: "Jedes Pokémon, auf dem δ zu sehen ist, kann die Angriffe auf dieser Karte anstelle seiner eigenen benutzen.",
	},

	attacks: [{
		name: {
			de: "Delta-Ruf"
		},

		effect: {
			de: "Durchsuche dein Deck nach einem Pokémon, auf dem δ zu sehen ist, zeige es deinem Gegner und nimm es auf die Hand. Mische dein Deck danach."
		},

		cost: ["Colorless"]
	}],

	thirdParty: {
		cardmarket: 277057,
		tcgplayer: 86144
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
	]
}

export default card
