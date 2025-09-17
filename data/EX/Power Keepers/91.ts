import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Warp Energy",
		fr: "Énergie de distorsion",
		de: "Verkrümmungs-Energie"
	},

	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		de: "Verkrümmungs-Energie liefert -Energie.\nWenn du die Verkrümmungs-Energie von der Hand an dein Aktives Pokémon anlegst, tausche dieses Pokémon mit 1 Pokémon auf deiner Bank aus."
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

