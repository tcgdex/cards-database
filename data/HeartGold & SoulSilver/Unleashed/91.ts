import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Entei & Raikou LEGEND",
		fr: "Entei & Raikou LÉGENDE (bas)",
	},
	illustrator: undefined,
	rarity: "Rare",
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
			},
			effect: {
				en: "Discard a Fire Energy attached to Entei & Raikou LEGEND.",
				fr: "Défaussez une carte Énergie Fire attachée à Entei & Raikou LÉGENDE.",
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
			},
			effect: {
				en: "Discard all Energy attached to Entei & Raikou LEGEND. This attack does 80 damage to each Pokémon that has any Poké-Powers (both yours and your opponent's). This attack's damage isn't affected by Weakness or Resistance.",
				fr: "Défaussez toutes les cartes Énergie attachées à Entei & Raikou LÉGENDE. Cette attaque inflige 80 dégâts à chaque Pokémon ayant des Poké-Powers (les vôtres et ceux de votre adversaire). Les dégâts infligés par cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
			},

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
		{
			type: "Fightning",
			value: "×2"
		},
	],





}

export default card
