import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Darkness Energy",
		fr: "Énergie obscurité",
		de: "Finsternis-Energie"
	},

	illustrator: "Milky Isobe",
	rarity: "Rare",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		en: "If the Pokémon Darkness Energy is attached to damages the Defending Pokémon (after applying Weakness and Resistance), the attack does 10 more damage to the Defending Pokémon. At the end of every turn, put 1 damage counter on the Pokémon Darkness Energy is attached to, unless it's Darkness or has Dark in its name. Darkness Energy provides Darkness Energy. (Doesn't count as a basic Energy card.)",
		de: "Falls das Pokémon, an das die Finsternis-Energie angelegt ist, dem Verteidigenden Pokémon Schadenspunkte zufügt (nachdem Schwäche und Resistenz verrechnet wurden), fügt der Angriff dem Verteidigenden Pokémon 10 weitere Schadenspunkte zu. Lege am Ende jedes Zugs eine Schadensmarke auf das Pokémon, an das die Finsternis-Energie angelegt ist, falls es nicht vom Typ  ist oder 'Dunkel' im Namen hat. Finsternis-Energie liefert - Energie. (Zählt nicht als Basis-Energiekarte.)",
		fr: "Si le Pokémon sur lequel est attachée Énergie obscurité inflige des dégâts au Pokémon Défenseur (après application de la Faiblesse et de la Résistance), cette attaque inflige 10 dégâts supplémentaires au Pokémon Défenseur."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 84696,
				cardmarket: 275218
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 84696,
				cardmarket: 275218
			}
		},
	],
	types: [
		"Darkness"
	]
}

export default card
