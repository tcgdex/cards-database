import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Castaway",
		fr: "Naufragé",
		de: "Schiffbrüchiger"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Search your deck for a Supporter card, a Pokémon Tool card, and a basic Energy card. Show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
		fr: "Choisissez dans votre deck une carte Supporter, une carte Outil Pokémon et une carte Énergie de base. Montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck.",
		de: "Durchsuche dein Deck nach einer Pokémon-Ausrüstungs-Karte und einer Basis-Energiekarte. Zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach.",
	},

	thirdParty: {
		cardmarket: 277153,
		tcgplayer: 84125
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
			stamp: ["jeremy-scharff-kim"]
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
		}
	]
}

export default card
