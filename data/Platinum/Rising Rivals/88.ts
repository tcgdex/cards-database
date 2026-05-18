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
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Search your discard pile for up to 2 in any combination of Pokémon SP and basic Energy cards, show them to your opponent, and put them into your hand.",
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.",
		de: "Durchsuche deinen Ablagestapel nach bis zu 2 Karten in beliebiger Kombination aus Pokémon SP- und Basis-Energiekarten, zeige sie deinem Gegner und nimm sie auf die Hand."
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
