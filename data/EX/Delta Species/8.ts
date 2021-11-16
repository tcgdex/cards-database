import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Latias δ",
		fr: "Latias δ ESPÈCES DELTA"
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		380,
	],
	hp: 70,
	types: [
		"Lightning",
		"Metal",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Delta Aura",
				fr: "Aura Delta"
			},
			effect: {
				en: "If you have Latios or Latios ex in play, the attack cost of Latias's Extra Crush is now Lightning Metal Colorless.",
				fr: "Si vous avez un Latios ou un Latios ex en jeu, le Coût de l'attaque Extra broyage de Latias est maintenant ."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Spiral Drain",
				fr: "Spirale épuisante"
			},
			effect: {
				en: "Remove 2 damage counters from Latias.",
				fr: "Retirez à Latias 2 marqueurs de dégât."
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Metal",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Extra Crush",
				fr: "Extra broyage"
			},
			effect: {
				en: "If your opponent has no Pokémon-ex in play, this attack does nothing.",
				fr: "Si votre adversaire n'a pas de Pokémon-ex en jeu, cette attaque est sans effet."
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
		{
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
