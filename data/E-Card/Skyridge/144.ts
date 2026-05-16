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
		en: "This card provides Colorless Energy. When you play this card from your hand and attach it to 1 of your Evolved Pokémon, you may remove up to 2 damage counters from that Pokémon and discard the top card from it. (This counts as devolving it.)",
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
