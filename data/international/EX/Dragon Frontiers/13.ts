import { Card } from 'models/database/card'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		'en-us': "Arbok δ",
		'fr-fr': "Arbok δ",
		'de-de': "Arbok"
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
		'en-us': "Ekans",
		'fr-fr': "Abo"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Burning Venom",
				'fr-fr': "Venin brûlant",
				'de-de': "Brennendes Gift"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Burned and Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Brûlé et Empoisonné.",
				'de-de': "Das Verteidigende Pokémon ist jetzt verbrannt und vergiftet"
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Strangle",
				'fr-fr': "Étrangler",
				'de-de': "Erdrosseln"
			},
			effect: {
				'en-us': "If the Defending Pokémon has δ on its card, this attack does 50 damage plus 30 more damage.",
				'fr-fr': "Si le Pokémon Défenseur possède le symbole δ, cette attaque inflige 50 dégâts plus 30 dégâts supplémentaires.",
				'de-de': "Wenn auf dem Verteidigenden Pokémon δ zu sehen ist, fügt dieser Angriff 50 Schadenspunkte plus 30 weitere Schadenspunkte zu."
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
