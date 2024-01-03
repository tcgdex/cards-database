import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Darkness Energy",
		fr: "Énergie Obscurité",
		de: "Finsternis-Energie"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,

	effect: {
		fr: "Si le Pokémon auquel est attachée Énergie Obscurité lance une attaque, cette dernière inflige 10 dégâts supplémentaires au Pokémon Actif (avant application de la Faiblesse et de la Résistance). Ignorez cet effet si le Pokémon auquel est attachée Énergie Obscurité n’est pas Darkness. Énergie Obscurité fournit de l’Énergie Darkness. (Ne compte pas comme une carte Énergie de base.)",
		en: "If the Pokémon Darkness Energy is attached to attacks, the attack does 10 more damage to the Active Pokémon (before applying Weakness and Resistance). Ignore this effect if the Pokémon that Darkness Energy is attached to isn’t Darkness. Darkness Energy provides Darkness Energy. (Doesn’t count as a basic Energy card.)",
		de: "Falls das Pokémon, an das Finsternis-Energie angelegt ist, angreift, fügt der Angriff den Aktiven Pokémon 10 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden). Dieser Effekt wirkt nur, wenn die Finsternis-Energie an einem Pokémon vom Typ  angelegt ist. Finsternis-Energie liefert -Energie. (Zählt nicht als Basis-Energiekarte.)"
	},

	energyType: "Special",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	hp: 0
}

export default card
