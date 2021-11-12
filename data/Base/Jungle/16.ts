import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Wigglytuff",
		fr: "Grodoudou"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		40,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Jigglypuff",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Lullaby",
				fr: "Comptine"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Do the Wave",
				fr: "Faites la vague"
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each of your Benched Pokémon.",
				fr: "Infligez 10 dégâts plus 10 dégâts supplémentaires pour chacun des Pokémon de votre Banc."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	description: {
		fr: "En cas de danger, il gonfle d'air son corps doux et potelé dans des proportions gigantesques."
	}
}

export default card
