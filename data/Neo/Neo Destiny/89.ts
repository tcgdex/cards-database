import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Unown [V]",
		fr: "Zarbi V",
		de: "Icognito V"
	},

	illustrator: "CR CG gangs",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		201,
	],

	hp: 40,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "[Vanish]",
				fr: "Vanish",
				de: "Vanish"
			},
			effect: {
				en: "When you play Unown V from your hand, you may flip a coin. If heads, return 1 of your Pokémon with Unown in its name (other than Unown V) to your hand. (Discard all cards attached to that card.)",
				fr: "Quand vous jouez Zarbi [V] depuis votre main, vous pouvez lancer une pièce. Si c'est face, renvoyez 1 de vos Pokémon Zarbi (autre que Zarbi [V]) dans votre main. (Défaussez-vous de toutes les cartes attachées à ce Pokémon.)",
				de: "When you play Unown V from your hand, you may flip a coun. If heads, return 1 of your Pokémon with Unown in its name (other than Unown V) to your hand. (Discard all cards attached to that card.)"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Hidden Power",
				fr: "Puissance cachée",
				de: "Kraftreserve"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "On pense que la variété des types de ce Pokémon particulier est le résultat d'une adaptation due à un caprice de l'évolution, chacun possédant une capacité différente."
	},

	thirdParty: {
		cardmarket: 274741
	}
}

export default card
