import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Jynx",
		fr: "Lippoutou"
	},
	illustrator: "Hisao Nakamura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		124,
	],
	hp: 60,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Meditate",
				fr: "Yoga"
			},
			effect: {
				en: "This attack does 10 damage plus 10 more damage for each damage counter on the Defending Pokémon.",
				fr: "Cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégâts sur le Pokémon Défenseur."
			},
			damage: "10+",

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Confuse Ray",
				fr: "Onde folie"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus."
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





}

export default card
