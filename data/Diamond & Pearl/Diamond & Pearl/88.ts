import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Marill",
		fr: "Marill",
		de: "Marill"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		183,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Rollout",
				fr: "Roulade",
				de: "Walzer"
			},
			effect: {
				en: "If Marill is evolved from Azurill, this attack does 10 damage plus 20 more damage.",
				fr: "Si Marill évolue d'Azurill, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires.",
				de: "Wenn Marill sich aus Azurill entwickelt hat, fügt dieser Angriff 10 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Splashing Turn",
				fr: "Tour éclaboussant",
				de: "Platschende Drehung"
			},
			effect: {
				en: "Switch Marill with 1 of your Benched Pokémon.",
				fr: "Échangez Marill avec 1 des Pokémon de votre Banc.",
				de: "Tausche Marill gegen 1 Pokémon auf deiner Bank aus."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		fr: "Il plonge sous l'eau en utilisant sa queue comme un flotteur. Il aime les plantes du fond des rivières."
	},

	thirdParty: {
		cardmarket: 277587
	}
}

export default card
