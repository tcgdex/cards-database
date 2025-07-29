import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Grimer",
		fr: "Tadmorv",
		de: "Sleima"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		88,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Poison Sludge",
				fr: "Gadoue empoisonnée",
				de: "Giftiger Schlamm"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Wirf eine Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt vergiftet."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275153
	}
}

export default card
