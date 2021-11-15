import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Arbok δ",
		fr: "Arbok δ ESPÈCES DELTA"
	},
	illustrator: "Hisao Nakamura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		24,
	],
	hp: 80,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Ekans",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Burning Venom",
				fr: "Venin brûlant"
			},
			effect: {
				en: "The Defending Pokémon is now Burned and Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Brûlé et Empoisonné."
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Strangle",
				fr: "Étrangler"
			},
			effect: {
				en: "If the Defending Pokémon has δ on its card, this attack does 50 damage plus 30 more damage.",
				fr: "Si le Pokémon Défenseur possède le symbole δ, cette attaque inflige 50 dégâts plus 30 dégâts supplémentaires."
			},
			damage: "50+",

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
