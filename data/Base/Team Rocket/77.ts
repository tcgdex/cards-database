import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Nightly Garbage Run",
		fr: "Raid nocturne dans les poubelles",
		de: "Nächtliche Müllabfuhr"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Choose up to 3 Basic Pokémon cards, Evolution cards, and/or basic Energy cards from your discard pile. Show them to your opponent and shuffle them into your deck.",
		fr: "Choisissez jusqu'à 3 cartes Pokémon de base, Évolution et/ou Énergie de base dans votre pile de défausse. Montrez-les à votre adversaire et mélangez-les avec votre deck.",
		de: "Wähle bis zu drei basis-Pokémon-Karten, Evolutionskarten und/oder Basis-Energiekarten aus deinem Ablagestapel. Zeige sie deinem Gegner und mische sie in dein Deck."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274130,
				tcgplayer: 87755
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274130,
				tcgplayer: 87755
			}
		}
	]
}

export default card
