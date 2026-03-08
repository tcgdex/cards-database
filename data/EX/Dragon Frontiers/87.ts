import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Boost Energy",
		fr: "Énergie Super",
		de: "Antriebs-Energie"
	},

	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		de: "Antriebs-Energie kann nur an ein entwickeltes Pokémon angelegt werden. Lege Antriebs-Energie am Ende des Zuges, in dem sie angelegt wurde, auf deinen Ablagestapel. Antriebs-Energie liefert   -Energie. Das Pokémon, an das Antriebs-Energie angelegt ist, kann sich nicht zurückziehen. Handelt es sich bei dem Pokémon, an das Antriebs-Energie angelegt ist, nicht mehr um ein entwickeltes Pokémon, dann lege Antriebs-Energie auf deinen Ablagestapel."
	},

	thirdParty: {
		cardmarket: 277292,
		tcgplayer: 83940
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
