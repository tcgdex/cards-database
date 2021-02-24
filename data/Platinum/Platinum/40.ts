import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Toxicroak G",
		fr: "Coatox ",
	},
	illustrator: "Ryota Saito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		454,
	],
	hp: 90,
	types: [
		"Psychic",
	],

	stage: "Basic",
	suffix: "SP",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Anticipation",
				fr: "Anticipation",
			},
			effect: {
				en: "Prevent all effects of attacks, excluding damage, done to Toxicroak .",
				fr: "Prévenez tous les effets d'attaques, dégâts exclus, infligés à Coatox .",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Deep Poison",
				fr: "Poison profond",
			},
			effect: {
				en: "If the Defending Pokémon is Poisoned, this attack does 20 damage plus 40 more damage.",
				fr: "Si le Pokémon Défenseur est Empoisonné, cette attaque inflige 20 dégâts plus 40 dégâts supplémentaires.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
