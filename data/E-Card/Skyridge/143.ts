import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Cyclone Energy",
		de: "Zyklon-Energie"
	},

	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		en: "This card provides Colorless Energy. When you play this card from your hand and attach it to your Active Pokémon, your opponent switches his or her Active Pokémon with 1 of his or her Benched Pokémon.",
		de: "Dieser Karte erzeugt -Energie. Wenn du diese Karte aus deiner Hand spielst und an dein aktives Pokémon anlegst, tauscht dein Gegner sein aktives Pokémon mit 1 der Pokémon auf seiner Bank aus."
	},

	thirdParty: {
		cardmarket: 275401,
		tcgplayer: 84539
	},

	variants: [
		{
			type: 'normal',
		},
		{
			type: 'reverse',
		}
	]
}

export default card
