import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Darkness Energy",
		fr: "Énergie Obscurité",
		de: "Finsternis-Energie"
	},

	illustrator: "Milky Isobe",
	rarity: "Rare",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		de: "Falls das Pokémon, an das Finsternis-Energie angelegt ist, angreift, fügt der Angriff den Aktiven Pokémon 10 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet wurden). Dieser Effekt wirkt nur, wenn die Finsternis-Energie an einem Pokémon vom Typ  oder einem Pokémon, das \"Dunkel\" im namen hat, angelegt ist. Finsternis-Energie liefert -Energie. (Zählt nicht als Basis-Energiekarte.)",
		fr: "Si le Pokémon Énergie Obscurité est attaché à des attaques, l'attaque inflige 10 dégâts supplémentaires au Pokémon Actif (avant application de la Faiblesse et de la Résistance). Ignorez cet effet sauf si le Pokémon Attaquant est un Pokémon Obscurité ou si son nom comporte Obscur. Énergie Obscurité fournit une Énergie Obscurité. (Elle ne compte pas comme carte Énergie de base).",
	},

	thirdParty: {
		cardmarket: 277393,
		tcgplayer: 84688
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
			stamp: ["tom-roos"]
		}
	]
}

export default card
