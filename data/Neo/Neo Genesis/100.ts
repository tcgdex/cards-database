import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Double Gust",
		fr: "Double rafale",
		de: "Doppelter Windhauch"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Si vous avez un ou plusieurs Pokémon sur votre Banc, votre adversaire choisit l'un d'eux et l'échange avec votre Pokémon Actif. Ensuite, si votre adversaire a un ou plusieurs Pokémon sur son Banc, choisissez l'un d'eux et échangez-le avec son Pokémon Actif.",
		de: "If you have any Benched Pokémon, your opponent chooses 1 of them and switches it with your Active Pokémon. Then, if your opponent has any Benched Pokémon, choose 1 of them and switch it with his or her Active Pokémon."
	},

	thirdParty: {
		cardmarket: 274500,
		tcgplayer: 84891
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card
