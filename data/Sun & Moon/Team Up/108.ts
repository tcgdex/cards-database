import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Doublade",
		fr: "Dimoclès",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		680,
	],
	hp: 90,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Honedge",
		fr: "Monorpale",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tool Drop",
				fr: "Chute d’Outils",
			},
			effect: {
				en: "This attack does 30 damage for each Pokémon Tool card attached to all Pokémon.",
				fr: "Cette attaque inflige 30 dégâts pour chaque carte Outil Pokémon attachée aux Pokémon.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
