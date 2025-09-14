import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Arbok",
		fr: "Arbok",
		de: "Arbok"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		24,
	],

	hp: 70,

	types: [
		"Grass",
	],

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Poison Spray",
				fr: "Jet-venin",
				de: "Poison Spray"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
				de: "The Defending Pokémon is now Poisoned."
			}

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poison Reaction",
				fr: "Allergie poison",
				de: "Poison Reaction"
			},
			effect: {
				en: "If the Defending Pokémon is Poisoned, this attack does 20 damage plus 20 more damage.",
				fr: "Si le Pokémon Défenseur est Empoisonné, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires.",
				de: "If the Defending Pokémon is Poisoned, this attack does 20 damage plus 20 more damage."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 274878,
		tcgplayer: 83569
	},

	variants:[
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
