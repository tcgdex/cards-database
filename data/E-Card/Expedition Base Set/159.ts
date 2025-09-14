import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Metal Energy",
		fr: "Énergie Métal",
		de: "Metall-Energie"
	},

	illustrator: "Milky Isobe",
	rarity: "Rare",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		de: "Schaden, der dem Pokémon, an das Metall-Energie angelegt ist, durch Angriffe zugefügt wird, wird um 10 reduziert (nachdem Schwäche und Resistenz verrechnet wurden). Falls das Pokémon, an das Metall-Energie angelegt ist, nicht vom Typ  ist, reduziere den Schaden jedesmal um 10, wenn es einem Pokémon mit einem Angriff Schaden zufügt (nachdem Schwäche und Resistenz verrechnet wurden). Metall-Energie liefert -Energie. (Zählt nicht als Basis-Energiekarte.)"
	},

	thirdParty: {
		cardmarket: 275034,
		tcgplayer: 87370
	},

	variants:[
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
