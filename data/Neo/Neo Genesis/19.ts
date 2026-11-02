import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Metal Energy",
		fr: "Énergie Métal",
		de: "Metal Energy*"
	},

	illustrator: "Milky Isobe",
	rarity: "Rare",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		en: "Damage done to the Pokémon Metal Energy is attached to is reduced by 10 (after applying Weakness and Resistance). If the Pokémon Metal Energy is attached to isn't Metal, whenever it damages a Pokémon, reduce that damage by 10 (before applying Weakness and Resistance).\nMetal Energy provides Metal Energy. (Doesn't count as a basic Energy card.)",
		de: "Schadenspunkte, die dem Pokémon zugefügt werden, an das eine Metall-Energiekarte angelegt ist, werden um 10 reduziert (nachdem Schwäche und Resistenz verrechnet wurden). Falls das Pokémon, an das Metall-Energie angelegt ist, nicht von Typ {M} ist, reduziere die Schadenspunkte jedesmal um 10, wenn es einem Pokémon Schadenspunkte zufügt (bevor Schwäche und Resistenz verrechnet wurden). Metall-Energie liefert {M}-Energie (Zählt nicht als Basis-Energiekarte.)"
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274419,
				tcgplayer: 87368
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274419,
				tcgplayer: 87368
			}
		}
	]
}

export default card
