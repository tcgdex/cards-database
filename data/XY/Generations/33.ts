import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Gastly",
		fr: "Fantominus",
		de: "Nebulak"
	},

	illustrator: "kodama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		92,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Sleep Poison",
				fr: "Poison Dodo",
				de: "Schlafgift"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Asleep and Poisoned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Endormi et Empoisonné.",
				de: "Wirf 1 Münze. Bei „Kopf“ schläft das Aktive Pokémon deines Gegners jetzt und ist vergiftet."
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "Born from gases, anyone would faint if engulfed by its gaseous body, which contains poison.",
		de: "Eingehüllt in seinen gasförmigen, Gift enthaltenden Körper würde jeder in Ohnmacht fallen."
	},

	thirdParty: {
		cardmarket: 288471,
		tcgplayer: 113691
	}
}

export default card
