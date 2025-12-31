import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Entei & Raikou LEGEND",
		fr: "Entei & Raikou LÉGENDE (haut)",
		de: "Entei & Raikou LEGENDE"
	},

	illustrator: "Shinji Higuchi + Sachiko Eba 樋口 真嗣 + 江場 左知子",
	rarity: "LEGEND",
	category: "Pokemon",
	set: Set,

	dexId: [


		244,


		243,


	],

	hp: 140,

	types: [
		"Fire",
		"Lightning",
	],

	suffix: "Legend",
	stage: "Basic",
	retreat: 0,

	variants: [
		{
			type: "holo"
		},
	],

	attacks: [{
		name: {
			de: "Explosionswirbel"
		},

		damage: 90,

		effect: {
			de: "Lege 1 an Entei & Raikou-LEGENDE angelegte -Energie auf deinen Ablagestapel."
		},

		cost: ["Fire", "Colorless"]
	}, {
		name: {
			de: "Donnerfall"
		},

		effect: {
			de: "Lege alle an Entei & Raikou-LEGENDE angelegte Energien auf deinen Ablagestapel. Dieser Angriff fügt jedem Pokémon (deinen und denen deines Gegners), das NICHT über Poké-Power verfügt, 80 Schadenspunkte zu. Der Schaden dieses Angriffs wird durch Schwäche und Resistenz nicht verändert."
		},

		cost: ["Lightning", "Colorless"]
	}],

	thirdParty: {
		cardmarket: 279246
	}
}

export default card
