import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Evosoda",
		fr: "Évolusoda",
		de: "Evobrause"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Cherchez dans votre deck une carte Évolution de l'un de vos Pokémon et placez-la sur ce dernier. (Cela équivaut à faire évoluer le Pokémon.) Mélangez ensuite votre deck. Vous ne pouvez pas utiliser cette carte pendant votre premier tour ni sur un Pokémon qui a été joué pendant ce tour.",
		en: "Search your deck for a card that evolves from 1 of your Pokémon and put it onto that Pokémon. (This counts as evolving that Pokémon.) Shuffle your deck afterward. You can't use this card during your first turn or on a Pokémon that was put into play this turn.",
		de: "Durchsuche dein Deck nach 1 Karte, zu der sich 1 deiner Pokémon entwickelt, und lege sie auf das entsprechende Pokémon. (Dies zählt als Entwicklung des Pokémon.) Mische anschließend dein Deck. Du kannst diese Karte nicht während deines ersten Zuges oder für ein Pokémon, das in diesem Zug ins Spiel gebracht wurde, verwenden. Du kannst während deines Zuges (vor deinem Angriff) beliebig viele Itemkarten spielen."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 288499,
		tcgplayer: 113720
	}
}

export default card
