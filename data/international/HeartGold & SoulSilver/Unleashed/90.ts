import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Entei & Raikou LEGEND",
		'fr-fr': "Entei & Raikou LÉGENDE (haut)",
		'de-de': "Entei & Raikou LEGENDE"
	},

	illustrator: "Shinji Higuchi + Sachiko Eba",
	rarity: "LEGEND",
	category: "Pokemon",
	set: Set,

	dexId: [243],
	hp: 140,

	types: [
		"Fire",
		"Lightning"
	],

	suffix: "Legend",
	stage: "Basic",
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	retreat: 0,

	attacks: [{
		name: {
			'en-us': "Detonation Spin",
			'de-de': "Explosionswirbel"
		},

		damage: 90,

		effect: {
			'en-us': "Discard a Fire Energy attached to Entei & Raikou LEGEND.",
			'de-de': "Lege 1 an Entei & Raikou-LEGENDE angelegte -Energie auf deinen Ablagestapel."
		},

		cost: ["Fire", "Colorless"]
	}, {
		name: {
			'en-us': "Thunder Fall",
			'de-de': "Donnerfall"
		},

		effect: {
			'en-us': "Discard all Energy attached to Entei & Raikou LEGEND. This attack does 80 damage to each Pokémon that has any Poké-Powers (both yours and your opponent's). This attack's damage isn't affected by Weakness or Resistance.",
			'de-de': "Lege alle an Entei & Raikou-LEGENDE angelegte Energien auf deinen Ablagestapel. Dieser Angriff fügt jedem Pokémon (deinen und denen deines Gegners), das NICHT über Poké-Power verfügt, 80 Schadenspunkte zu. Der Schaden dieses Angriffs wird durch Schwäche und Resistenz nicht verändert."
		},

		cost: ["Lightning", "Colorless"]
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 279246,
				tcgplayer: 85277,
			}
		},
	],
}

export default card
