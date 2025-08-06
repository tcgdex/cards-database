import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Health Energy",
		fr: "Énergie santé",
		de: "Heil-Energie"
	},

	illustrator: "Takumi Akabane",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,

	effect: {
		fr: "Énergie santé fournit de l'Énergie Colorless. Lorsque vous attachez cette carte de votre main à 1 de vos Pokémon, retirez-lui 1 marqueur de dégât.",
		de: "Heil-Energie liefert -Energie. Wenn du diese Karte von deiner Hand an 1 deiner Pokémon anlegst, entferne 1 Schadensmarke von diesem Pokémon."
	},

	energyType: "Special",

	thirdParty: {
		cardmarket: 278143,
		tcgplayer: 86042
	}
}

export default card
