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
		fr: "Choisissez jusqu'à 3 cartes Pokémon de base, Évolution et/ou Énergie de base dans votre pile de défausse. Montrez-les à votre adversaire et mélangez-les avec votre deck.",
		de: "Wähle bis zu drei basis-Pokémon-Karten, Evolutionskarten und/oder Basis-Energiekarten aus deinem Ablagestapel. Zeige sie deinem Gegner und mische sie in dein Deck."
	},

	thirdParty: {
		cardmarket: 274130,
		tcgplayer: 87755
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card
