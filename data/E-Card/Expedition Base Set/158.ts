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
