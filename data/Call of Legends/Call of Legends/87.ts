import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Metal Energy",
		fr: "Énergie Métal",
		de: "Metall-Energie"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		de: "Schaden, der dem Pokémon, an das Metall-Energie angelegt ist, durch Angriffe zugefügt wird, wird um 10 reduziert (nachdem Schwäche und Resistenz verrechnet wurden). Dieser Effekt wirkt nur, wenn die Metall-Energie an einem Pokémon vom Typ  angelegt ist. Metall-Energie spendet -Energie. (Zählt nicht als Basis-Energiekarte.)",
		fr: "Les dégâts d'attaque infligés au Pokémon auquel Énergie Métal est attachée sont réduits de 10 (après application de la Faiblesse et de la Résistance). Ignorez cet effet si le Pokémon auquel est attachée Énergie Métal n'est pas Métal. Énergie Métal fournit de l'Énergie Métal. (Ne compte pas comme une carte Énergie de base.)",
	},

	thirdParty: {
		cardmarket: 279730,
		tcgplayer: 87367
	}
}

export default card
