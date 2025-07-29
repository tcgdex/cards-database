import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Darkness Energy",
		fr: "Énergie Obscurité",
		de: "Finsternis-Energie"
	},

	illustrator: "Takumi Akabane",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,

	effect: {
		fr: "Si le Pokémon auquel Énergie Obscurité est attachée attaque, cette attaque inflige 10 dégâts supplémentaires au Pokémon Actif (avant application de la Faiblesse et de la Résistance). Ignorez cet effet si le Pokémon auquel Énergie Obscurité est attachée n'est pas Darkness. Énergie Obscurité fournit de l'Énergie Darkness. (Elle ne compte pas comme carte Énergie de base).",
		de: "Falls das Pokémon, an das Finsternis-Energie angelegt ist, angreift, fügt der Angriff den Aktiven Pokémon 10 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden). Dieser Effekt wirkt nur, wenn die Finsternis-Energie an einem Pokémon vom Typ  angelegt ist. Finsternis-Energie liefert -Energie. (Zählt nicht als Basis-Energiekarte.)"
	},

	energyType: "Special",

	thirdParty: {
		cardmarket: 277882
	}
}

export default card
