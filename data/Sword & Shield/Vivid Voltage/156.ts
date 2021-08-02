import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Moomoo Cheese",
		fr: "Fromage Meumeu",
		es: "Queso Mu-mu",
		it: "Formaggio Mumu",
		pt: "Queijo de Moomoo",
		de: "Kuhmuh-Käse"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Heal 30 damage from up to 2 of your Pokémon that have Energy attached.",
		fr: "Soignez 30 dégâts d’un maximum de 2 de vos Pokémon auxquels de l’Énergie est attachée.",
		es: "Cura 30 puntos de daño de hasta 2 de tus Pokémon que tengan alguna Energía unida a ellos.",
		it: "Cura fino a due Pokémon che hanno Energie assegnate da 30 danni.",
		pt: "Cure 30 pontos de dano de até 2 dos seus Pokémon que tenham Energia ligada a eles.",
		de: "Heile 30 Schadenspunkte von bis zu 2 deiner Pokémon, an die Energie angelegt ist."
	},

	trainerType: "Item",
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
