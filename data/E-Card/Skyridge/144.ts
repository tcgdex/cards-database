import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Retro Energy",
		de: "Retro Energie"
	},

	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		de: "Diese Karte erzeugt  - Energie. Wenn du diese Karte aus deiner Hand spielst und an 1 deiner entwickelten Pokémon anlegst, kannst du bis zu 2 Schadensmarken von diesem Pokémon entfernen und dann seine oberste Karte auf deinen Ablagestapel legen. (Dies zählt als Rückentwicklung dieses Pokémon)"
	},

	thirdParty: {
		cardmarket: 275402,
		tcgplayer: 88718
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
