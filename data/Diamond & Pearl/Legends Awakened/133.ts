import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Poké Radar",
		fr: "Poké radar",
		de: "Poké-Radar"
	},

	illustrator: "Kazuaki Aihara",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Look at the top 5 cards of your deck, choose as many Pokémon as you like, show them to your opponent, and put them into your hand. Put the other cards back on top of your deck. Shuffle your deck afterward.",
		fr: "Regardez les 5 cartes du dessus de votre deck, choisissez-y autant de Pokémon que vous le voulez, montrez-les à votre adversaire et placez-les dans votre main. Replacez les autres cartes au dessus de votre deck. Ensuite, mélangez votre deck.",
		de: "Schau dir die obersten 5 Karten deines Decks an. Wähle beliebig viele Pokémon-Karten, die du dort gefunden hast, zeige sie deinem Gegner und nimm sie auf die Hand. Lege die restlichen Karten auf dein Deck zurück. Mische dein Deck danach."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 278282
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
