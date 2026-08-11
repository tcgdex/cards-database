import { Card } from 'models/database/card'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		'en-us': "Warp Energy",
		'fr-fr': "Énergie de distorsion",
		'de-de': "Verkrümmungs-Energie"
	},

	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		'en-us': "Warp Energy provides Colorless Energy. When you attach this card from your hand to your Active Pokémon, switch that Pokémon with 1 of your Benched Pokémon.",
		'de-de': "Verkrümmungs-Energie liefert -Energie.\nWenn du die Verkrümmungs-Energie von der Hand an dein Aktives Pokémon anlegst, tausche dieses Pokémon mit 1 Pokémon auf deiner Bank aus.",
		'fr-fr': "Énergie de distorsion fournit de l'Énergie Incolore. Lorsque vous attachez cette carte de votre main à votre Pokémon Actif, échangez ce Pokémon avec 1 des Pokémon de votre Banc.",
	},

	thirdParty: {
		cardmarket: 277397,
		tcgplayer: 90474
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

