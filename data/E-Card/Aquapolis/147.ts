import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Warp Energy",
		fr: "Énergie de distorsion",
		de: "Verkrümmungs-Energie"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		de: "Verkrümmungs-Energie liefert -Energie. Wenn du Verkrümmungs-Energie aus deiner Hand an dein Aktives Pokémon anlegst, tausche dein Aktives Pokémon mit 1 der Pokémon auf deiner Bank.",
		fr: "Énergie de distorsion fournit Énergie Incolore. Quand vous attachez Énergie de distorsion depuis votre main à votre Pokémon Actif, échangez votre Pokémon Actif contre l'un des Pokémon de votre Banc.",
	},

	thirdParty: {
		cardmarket: 275223,
		tcgplayer: 90472
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
		{
			type: "normal",
			stamp: ["chris-fulop"]
		}
	]
}

export default card
