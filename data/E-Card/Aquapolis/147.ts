import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

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
		en: "Warp Energy provides 1 Colorless Energy. When you attach Warp Energy from your hand to your Active Pokémon, switch your Active Pokémon with 1 of your Benched Pokémon.",
		de: "Verkrümmungs-Energie liefert -Energie. Wenn du Verkrümmungs-Energie aus deiner Hand an dein Aktives Pokémon anlegst, tausche dein Aktives Pokémon mit 1 der Pokémon auf deiner Bank.",
		fr: "Énergie de distorsion fournit Énergie Incolore. Quand vous attachez Énergie de distorsion depuis votre main à votre Pokémon Actif, échangez votre Pokémon Actif contre l'un des Pokémon de votre Banc."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90472,
				cardmarket: 275223
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 90472,
				cardmarket: 275223
			}
		},
		{
			type: "normal",
			stamp: ["chris-fulop"],
			thirdParty: {
				tcgplayer: 477460
			}
		}
	]
}

export default card
