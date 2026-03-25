import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Aaron's Collection",
		fr: "La collection d'Aaron",
		de: "Herbaros Sammlung"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Choisissez dans votre pile de défausse n'importe quelle combinaison de jusqu'à 2 Pokémon SP et cartes Énergie de base. Montrez-les à votre adversaire et placez-les dans votre main.",
		de: "Durchsuche deinen Ablagestapel nach bis zu 2 Karten in beliebiger Kombination aus Pokémon SP- und Basis-Energiekarten, zeige sie deinem Gegner und nimm sie auf die Hand.",
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 278662,
		tcgplayer: 83439
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
			stamp: ["tsubasa-nakamura"]
		},
		{
			type: "normal",
			stamp: ["yuta-komatsuda"]
		}
	]
}

export default card
