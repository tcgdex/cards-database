import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Yveltal BREAK",
		fr: "Yveltal TURBO",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		717,
	],
	hp: 150,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Yveltal",
		fr: "Yveltal",
	},
	stage: "BREAK",


	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
				"Darkness",
			],
			name: {
				en: "Baleful Night",
				fr: "Règle des Évolutions TURBO",
			},
			effect: {
				en: "This attack does 30 damage to each of your opponent's Benched Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 120,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Darkness",
			],
			name: {
				fr: "Nuit Maléfique",
			},
			effect: {
				fr: "Cette attaque inflige 30 dégâts à chacun des Pokémon de Banc de votre adversaire ayant au moins 1 marqueur de dégâts. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 120,

		},
	],






}

export default card
