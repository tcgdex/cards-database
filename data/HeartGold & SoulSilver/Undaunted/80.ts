import { Card } from '../../../interfaces'
import Set from '../Undaunted'

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

	effect: {
		fr: "Les dégâts d’attaque infligés au Pokémon auquel Énergie Métal est attachée sont réduits de 10 (après application de la Faiblesse et de la Résistance). Ignorez cet effet si le Pokémon auquel est attachée Énergie Métal n’est pas Metal. Énergie Métal fournit de l’Énergie Metal. (Ne compte pas comme une carte Énergie de base.)",
		en: "Damage done by attacks to the Pokémon that Metal Energy is attached to is reduced by 10 (after applying Weakness and Resistance). Ignore this effect if the Pokémon that Metal Energy is attached to isn’t Metal. Metal Energy provides Metal Energy. (Doesn’t count as a basic Energy card.)",
		de: "Schaden, der dem Pokémon, an das Metall-Energie angelegt ist, durch Angriffe zugefügt wird, wird um 10 reduziert (nachdem Schwäche und Resistenz verrechnet wurden). Dieser Effekt wirkt nur, wenn die Metall-Energie an einem Pokémon vom Typ  angelegt ist. Metall-Energie spendet -Energie. (Zählt nicht als Basis-Energiekarte.)"
	},

	energyType: "Special",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279333,
		tcgplayer: 87366
	}
}

export default card
