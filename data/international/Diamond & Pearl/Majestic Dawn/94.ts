import { Card } from 'models/database/card'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		'en-us': "Health Energy",
		'fr-fr': "Énergie santé",
		'de-de': "Heil-Energie"
	},

	illustrator: "Takumi Akabane",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,

	effect: {
		'en-us': "Health Energy provides Colorless Energy. When you attach this card from your hand to 1 of your Pokémon, remove 1 damage counter from that Pokémon.",
		'fr-fr': "Énergie santé fournit de l'Énergie Colorless. Lorsque vous attachez cette carte de votre main à 1 de vos Pokémon, retirez-lui 1 marqueur de dégât.",
		'de-de': "Heil-Energie liefert -Energie. Wenn du diese Karte von deiner Hand an 1 deiner Pokémon anlegst, entferne 1 Schadensmarke von diesem Pokémon."
	},

	energyType: "Special",

	thirdParty: {
		cardmarket: 278143,
		tcgplayer: 86042
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
