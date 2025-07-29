import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Koffing",
		fr: "Smogo",
		es: "Koffing",
		it: "Koffing",
		pt: "Koffing",
		de: "Smogon"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		109,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Foul Odor",
				fr: "Odeur Fétide",
				es: "Olor Pestilente",
				it: "Puzza",
				pt: "Odor Sujo",
				de: "Fäulnisgeruch"
			},
			effect: {
				en: "Both Active Pokémon are now Confused.",
				fr: "Les deux Pokémon Actifs sont maintenant Confus.",
				es: "Ambos Pokémon Activos pasan a estar Confundidos.",
				it: "Entrambi i Pokémon attivi vengono confusi.",
				pt: "Ambos os Pokémon Ativos agora estão Confusos.",
				de: "Beide Aktiven Pokémon sind jetzt verwirrt."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 372361
	}
}

export default card
