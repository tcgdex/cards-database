import { Card } from 'models/database/card'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		'en-us': "Holon Lake",
		'fr-fr': "Lac Holon",
		'de-de': "Holon-See"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		'en-us': "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card. Each player's Pokémon that has δ on its card can use attacks on this card instead of its own.",
		'fr-fr': "Les Pokémon de chaque joueur possédant le symbole δ peuvent utiliser les attaques de cette carte à la place des leurs.",
		'de-de': "Jedes Pokémon, auf dem δ zu sehen ist, kann die Angriffe auf dieser Karte anstelle seiner eigenen benutzen.",
	},

	attacks: [
		{
			name: {
				'de-de': "Delta-Ruf",
				'fr-fr': "Appel Delta"
			},
			effect: {
				'de-de': "Durchsuche dein Deck nach einem Pokémon, auf dem δ zu sehen ist, zeige es deinem Gegner und nimm es auf die Hand. Mische dein Deck danach.",
				'fr-fr': "Cherchez dans votre deck un Pokémon possédant le symbole δ, montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck."
			},
			cost: [
				"Colorless",
			]
		},
	],

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
