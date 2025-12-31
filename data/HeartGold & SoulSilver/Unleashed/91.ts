import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Entei & Raikou LEGEND",
		fr: "Entei & Raikou LÉGENDE (bas)",
		de: "Entei & Raikou LEGENDE"
	},

	illustrator: "Shinji Higuchi + Sachiko Eba",
	rarity: "LEGEND",
	category: "Pokemon",
	set: Set,

	dexId: [
		243,
	],

	hp: 140,

	types: [
		"Fire",
		"Lightning",
	],

	suffix: "Legend",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Detonation Spin",
				fr: "Détonations en pagaille",
				de: "Explosionswirbel"
			},
			effect: {
				en: "Discard a Fire Energy attached to Entei & Raikou LEGEND.",
				fr: "Défaussez une carte Énergie Fire attachée à Entei & Raikou LÉGENDE.",
				de: "Lege 1 an Entei & Raikou-LEGENDE angelegte -Energie auf deinen Ablagestapel."
			},
			damage: 90,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Thunder Fall",
				fr: "Cascatonnerre",
				de: "Donnerfall"
			},
			effect: {
				en: "Discard all Energy attached to Entei & Raikou LEGEND. This attack does 80 damage to each Pokémon that has any Poké-Powers (both yours and your opponent’s). This attack’s damage isn’t affected by Weakness or Resistance.",
				fr: "Défaussez toutes les cartes Énergie attachées à Entei & Raikou LÉGENDE. Cette attaque inflige 80 dégâts à chaque Pokémon ayant des Poké-Powers (les vôtres et ceux de votre adversaire). Les dégâts infligés par cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
				de: "Lege alle an Entei & Raikou-LEGENDE angelegte Energien auf deinen Ablagestapel. Dieser Angriff fügt jedem Pokémon (deinen und denen deines Gegners), das NICHT über Poké-Power verfügt, 80 Schadenspunkte zu. Der Schaden dieses Angriffs wird durch Schwäche und Resistenz nicht verändert."
			},

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
		{
			type: "Fighting",
			value: "×2"
		},
	],

	stage: "Basic",
	retreat: 0,

	variants: [
		{
			type: "holo"
		},
	],

	thirdParty: {
		cardmarket: 279246
	}
}

export default card
