import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Numel",
		fr: "Chamallot",
		de: "Camaub"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		322,
	],

	hp: 50,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Headbutt",
				fr: "Coup d'boule",
				de: "Kopfnuss"
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Burn Off",
				fr: "Crâmer",
				de: "Abbrennen"
			},
			effect: {
				en: "Flip a coin. If heads, each Defending Pokémon is now Burned.",
				fr: "Lancez une pièce. Si c'est face, chaque Pokémon Défenseur est maintenant Brûlé.",
				de: "Wirf eine Münze. Bei 'Kopf' sind alle Verteidigenden Pokémon jetzt verbrannt."
			},

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 275709,
		tcgplayer: 87805
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
		{
			type: "normal",
			subtype: "no-e-reader"
		}
	]
}

export default card
