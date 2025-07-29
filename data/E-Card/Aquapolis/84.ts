import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Horsea",
		fr: "Hypotrempe",
		de: "Seeper"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		116,
	],

	hp: 40,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Bubble",
				fr: "Écume",
				de: "Blubber"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf eine Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275158
	}
}

export default card
