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
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est mise en jeu. Si une autre carte comportant le même nom est en jeu, vous ne pouvez pas jouer cette carte.\n\nLes Pokémon de chaque joueur possédant le symbole δ peuvent utiliser les attaques de cette carte à la place des leurs.\n\tAppel Delta\t\nCherchez dans votre deck un Pokémon possédant le symbole δ, montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck.",
		de: "Jedes Pokémon, auf dem δ zu sehen ist, kann die Angriffe auf dieser Karte anstelle seiner eigenen benutzen."
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
	}
}

export default card
