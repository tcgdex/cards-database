import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

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
		en: "If the Pokémon Darkness Energy is attached to does damage with an attack (after applying Weakness and Resistance), the attack does 10 more damage. At the end of every turn, put 1 damage counter on the Pokémon Darkness Energy is attached to, unless it's Darkness or has Dark in its name. Darkness Energy provides Darkness Energy. (Doesn't count as a basic Energy card.)",
		de: "Falls das Pokémon, an das Finsternis-Energie angelegt ist, mit einem Angriff Schaden zufügt ( nachdem Schwäche und Resistenz verrechnet wurden), fügt der Angriff 10 weiter Schadenspunkte zu. Lege am Ende jedes Zugs eine Schadensmarke auf das Pokémon, an das die Finsternis-Energie angelegt ist, falls es nicht vom Typ  ist oder 'Dunkel' im Namen hat. Finsternis-Energie liefert -Energie. (Zählt nicht als Basis-Energie.)",
		fr: "Si le Pokémon sur lequel est attachée Énergie obscurité inflige des dégâts lors d'une attaque (après application de la Faiblesse et de la Résistance), cette attaque inflige 10 dégâts supplémentaires.",
	},

	thirdParty: {
		cardmarket: 275033,
		tcgplayer: 84697
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
