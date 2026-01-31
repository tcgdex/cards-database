import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Arbok δ",
		fr: "Arbok δ",
		de: "Arbok"
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
		fr: "Abo"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Burning Venom",
				fr: "Venin brûlant",
				de: "Brennendes Gift"
			},
			effect: {
				en: "The Defending Pokémon is now Burned and Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Brûlé et Empoisonné.",
				de: "Das Verteidigende Pokémon ist jetzt verbrannt und vergiftet"
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
				fr: "Étrangler",
				de: "Erdrosseln"
			},
			effect: {
				en: "If the Defending Pokémon has δ on its card, this attack does 50 damage plus 30 more damage.",
				fr: "Si le Pokémon Défenseur possède le symbole δ, cette attaque inflige 50 dégâts plus 30 dégâts supplémentaires.",
				de: "Wenn auf dem Verteidigenden Pokémon δ zu sehen ist, fügt dieser Angriff 50 Schadenspunkte plus 30 weitere Schadenspunkte zu."
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


	retreat: 1,

	thirdParty: {
		cardmarket: 277218
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
