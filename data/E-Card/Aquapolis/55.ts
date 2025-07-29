import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Nidorino",
		fr: "Nidorino",
		de: "Nidorino"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		33,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Nidoran♂",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],

			name: {
				en: "Poison Horn",
				fr: "Corne empoisonnée",
				de: "Gifthorn"
			},

			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Wirf eine Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt vergiftet."
			},

			damage: 10
		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Take Down",
				fr: "Bélier",
				de: "Bodycheck"
			},
			effect: {
				en: "Nidorino does 10 damage to itself.",
				fr: "Nidorino s'inflige 30 dégâts.",
				de: "Nidorino fügt sich selber 10 Schadenspunkte zu."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275128
	}
}

export default card
