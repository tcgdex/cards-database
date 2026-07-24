import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Undersea Ruins",
		fr: "Copieuse",
		de: "Nachahmerin"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Stadium",
	set: Set,

	effect: {
		en: "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Once during each player's turn (before attacking), that player may flip a coin. If heads, that player chooses 1 of his or her Evolved Pokémon in play and discards the top Evolution card from that Pokémon, devolving it.",
		fr: "Mélangez votre main avec votre deck. Comptez ensuite le nombre de cartes dans la main de votre adversaire et piochez autant de cartes.",
		de: "Mische deine Hand in dein Deck. Zähle dann die Anzahl an Karten auf der Hand deines Gegners und ziehe so viele Karten.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84423,
				cardmarket: 275013
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 84423,
				cardmarket: 275013
			},
		},
		{
			type: "normal",
			stamp: ["chris-fulop"]
		},
		{
			type: "normal",
			stamp: ["tsuguyoshi-yamato"]
		},
		{
			type: "normal",
			stamp: ["reed-weichler"]
		}
	],
}

export default card
