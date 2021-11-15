import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Dewgong",
		fr: "Lamantine"
	},
	illustrator: "Toshinao Aoki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		87,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Seel",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Safeguard",
				fr: "Rune protectrice"
			},
			effect: {
				en: "Prevent all effects of attacks, including damage, done to Dewgong by your opponent's Pokémon-ex.",
				fr: "Prévenez tous les effets d'une attaque, dégâts inclus, infligés à Lamantine par le Pokémon-ex de votre adversaire."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Cold Breath",
				fr: "Souffle Froid"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aurora Beam",
				fr: "Onde boréale"
			},

			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],





}

export default card
