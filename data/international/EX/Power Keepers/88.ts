import { Card } from 'models/database/card'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		'en-us': "Metal Energy",
		'fr-fr': "Énergie Métal",
		'de-de': "Metall-Energie"
	},

	illustrator: "Milky Isobe",
	rarity: "Rare",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		'en-us': "Damage done by attacks to the Pokémon that Metal Energy is attached to is reduced by 10 (after applying Weakness and Resistance). Ignore this effect if the Pokémon that Metal Energy is attached to isn't Metal. Metal Energy provides Metal Energy. (Doesn't count as a basic Energy card.)",
		'de-de': "Schaden, der dem Pokémon, an das Metall-Energie angelegt ist, durch Angriffe zugefügt wird, wird um 10 reduziert (nachdem Schwäche und Resistenz verrechnet wurden). Dieser Effekt wirkt nur, wenn die Metall-Energie an einem Pokémon vom Typ  angelegt ist. Metall-Energie liefert -Energie. (Zählt nicht als Basis-Energiekarte.)",
		'fr-fr': "Les dégâts infligés au Pokémon auquel Énergie Métal est attachée sont réduits de 10 (après application de la Faiblesse et de la Résistance). Ignorez cet effet si le Pokémon auquel Énergie Métal est attachée n'est pas de type Métal. Énergie Métal fournit de l'Énergie Métal. (Elle ne compte pas comme Énergie de base.)",
	},

	thirdParty: {
		cardmarket: 277394,
		tcgplayer: 87361
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

