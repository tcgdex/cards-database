import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Metal Energy",
		fr: "Énergie Métal",
		de: "Metall-Energie"
	},

	illustrator: "Takumi Akabane",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		de: "Schaden, der dem Pokémon, an das Metall-Energie angelegt ist, durch Angriffe zugefügt wird, wird um 10 reduziert (nachdem Schwäche und Resistenz verrechnet wurden). Dieser Effekt wirkt nur, wenn die Metall-Energie an einem Pokémon vom Typ  angelegt ist. Metall-Energie spendet -Energie. (Zählt nicht als Basis-Energiekarte.)",
		fr: "Les dégâts infligés par des attaques au Pokémon auquel Énergie Métal est attachée sont réduits de 10 (après application de la Faiblesse et la Résistance) Ignorez cet effet si le Pokémon auquel Énergie Métal est attachée n'est pas de type Métal. Énergie Métal fournit de l'Énergie Métal. (Elle ne compte pas comme carte Énergie de base.)",
	},

	thirdParty: {
		cardmarket: 277749,
		tcgplayer: 87362
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
