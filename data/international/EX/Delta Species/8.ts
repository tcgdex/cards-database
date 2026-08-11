import { Card } from 'models/database/card'
import Set from '../Delta Species'

const card: Card = {
	name: {
		'en-us': "Latias δ",
		'fr-fr': "Latias δ",
		'de-de': "Latias"
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
				'en-us': "Delta Aura",
				'fr-fr': "Aura Delta",
				'de-de': "Delta-Aura"
			},
			effect: {
				'en-us': "If you have Latios or Latios ex in play, the attack cost of Latias's Extra Crush is now Lightning Metal Colorless.",
				'fr-fr': "Si vous avez un Latios ou un Latios ex en jeu, le Coût de l'attaque Extra broyage de Latias est maintenant .",
				'de-de': "Wenn du Latios oder Latios ex im Spiel hast, kostet Latias Extra Zerschmettern nur noch   ."
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
				'en-us': "Spiral Drain",
				'fr-fr': "Spirale épuisante",
				'de-de': "Spiralsauger"
			},
			effect: {
				'en-us': "Remove 2 damage counters from Latias.",
				'fr-fr': "Retirez à Latias 2 marqueurs de dégât.",
				'de-de': "Entferne 2 Schadensmarken von Latias."
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
				'en-us': "Extra Crush",
				'fr-fr': "Extra broyage",
				'de-de': "Extra Zerschmettern"
			},
			effect: {
				'en-us': "If your opponent has no Pokémon-ex in play, this attack does nothing.",
				'fr-fr': "Si votre adversaire n'a pas de Pokémon-ex en jeu, cette attaque est sans effet.",
				'de-de': "Wenn dein Gegner keine Pokémon-ex im Spiel hat, hat dieser Angriff keine Auswirkung."
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
