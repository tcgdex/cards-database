import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

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
	energyType: "Special",

	effect: {
		de: "Falls das Pokémon, an das Finsternis-Energie angelegt ist, angreift, fügt der Angriff den Aktiven Pokémon 10 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden). Dieser Effekt wirkt nur, wenn die Finsternis-Energie an einem Pokémon vom Typ  angelegt ist. Finsternis-Energie liefert -Energie. (Zählt nicht als Basis-Energiekarte.)",
		fr: "Si le Pokémon Énergie Obscurité est attaché à des attaques, l'attaque inflige 10 dégâts supplémentaires au Pokémon Actif (avant application de la Faiblesse et de la Résistance). Ignorez cet effet si le Pokémon auquel Énergie Obscurité est attachée n'est pas de type Obscurité. Énergie Obscurité fournit de l'Énergie Obscurité. (Elle ne compte pas comme carte Énergie de base.)",
	},

	thirdParty: {
		cardmarket: 277748,
		tcgplayer: 84689
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
