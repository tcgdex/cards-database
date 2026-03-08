import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Latias δ",
		fr: "Latias δ",
		de: "Latias"
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
				fr: "Aura Delta",
				de: "Delta-Aura"
			},
			effect: {
				en: "If you have Latios or Latios ex in play, the attack cost of Latias's Extra Crush is now Lightning Metal Colorless.",
				fr: "Si vous avez un Latios ou un Latios ex en jeu, le Coût de l'attaque Extra broyage de Latias est maintenant .",
				de: "Wenn du Latios oder Latios ex im Spiel hast, kostet Latias Extra Zerschmettern nur noch   ."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Metal",
			],
			name: {
				en: "Spiral Drain",
				fr: "Spirale épuisante",
				de: "Spiralsauger"
			},
			effect: {
				en: "Remove 2 damage counters from Latias.",
				fr: "Retirez à Latias 2 marqueurs de dégât.",
				de: "Entferne 2 Schadensmarken von Latias."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Lightning",
				"Metal",
			],
			name: {
				en: "Extra Crush",
				fr: "Extra broyage",
				de: "Extra Zerschmettern"
			},
			effect: {
				en: "If your opponent has no Pokémon-ex in play, this attack does nothing.",
				fr: "Si votre adversaire n'a pas de Pokémon-ex en jeu, cette attaque est sans effet.",
				de: "Wenn dein Gegner keine Pokémon-ex im Spiel hat, hat dieser Angriff keine Auswirkung."
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


	retreat: 1,

	thirdParty: {
		cardmarket: 276771
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
