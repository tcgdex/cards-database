import { Card } from 'models/database/card'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		'en-us': "Recover Energy",
		'fr-fr': "Énergie guérison",
		'de-de': "Erhol-Energie"
	},

	illustrator: "Takumi Akabane",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,

	effect: {
		'en-us': "Recover Energy provides Colorless Energy. When you attach this card from your hand to 1 of your Pokémon, remove all Special Conditions from that Pokémon.",
		'fr-fr': "Énergie guérison fournit de l'Énergie Colorless. Lorsque vous attachez cette carte de votre main à 1 de vos Pokémon, retirez-lui tous ses États Spéciaux.",
		'de-de': "Erhol-Energie liefert -Energie. Wenn du diese Karte von deiner Hand an 1 deiner Pokémon anlegst, entferne alle Speziellen Zustände von diesem Pokémon."
	},

	energyType: "Special",

	thirdParty: {
		cardmarket: 278145,
		tcgplayer: 88651
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
