import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Steven's Advice",
		fr: "Les conseils de Pierre",
		de: "Troys Rat"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Draw a number of cards up to the number of your opponent's Pokémon in play. If you have 7 or more cards (including this one) in your hand, you can't play this card.",
		fr: "Vous pouvez piocher un nombre de cartes égal au nombre de Pokémon en jeu de votre adversaire. Si vous possédez au moins 7 cartes (celle-ci incluse) dans votre main, vous ne pouvez pas jouer cette carte.",
		de: "Ziehe so viele Karten, wie dein Gegner Pokémon im Spiel hat.\nWenn du 7 oder mehr Karten (inklusive dieser Karte) auf der Hand hast, kannst du diese Karte nicht spielen.",
	},

	thirdParty: {
		cardmarket: 277389,
		tcgplayer: 89568
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
			stamp: ["akira-miyazaki"]
		},
		{
			type: "normal",
			stamp: ["paul-atanassov"]
		},
		{
			type: "normal",
			stamp: ["dylan-lefavour"]
		},
		{
			type: "normal",
			stamp: ["tristan-robinson"]
		},
		{
			type: "normal",
			stamp: ["jason-klaczynski"]
		}
	]
}

export default card
