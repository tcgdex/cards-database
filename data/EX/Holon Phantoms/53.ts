import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Sharpedo δ",
		fr: "Sharpedo δ ESPÈCES DELTA"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		319,
	],
	hp: 70,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Carvanha",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Brush Aside",
				fr: "Repousser"
			},
			effect: {
				en: "If Sharpedo has any Holon Energy cards attached to it, choose 1 card from your opponent's hand without looking and discard it.",
				fr: "Si Sharpedo possède des cartes Énergie Holon, choisissez sans regarder 1 carte de la main de votre adversaire et défaussez-la."
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Swift Turn",
				fr: "Tour express"
			},
			effect: {
				en: "If the Defending Pokémon has Fighting Resistance, this attack does 50 damage plus 30 more damage.",
				fr: "Si le Pokémon Défenseur possède une Résistance , cette attaque inflige 50 dégâts plus 30 dégâts supplémentaires."
			},
			damage: "50+",

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
