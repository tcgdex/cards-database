import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Wigglytuff",
		fr: "Grodoudou",
		de: "Knuddeluff"
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
				fr: "Comptine",
				de: "Wiegenlied"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "Das verteidigende Pokémon ist jetzt schlafend"
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
				fr: "Faites la vague",
				de: "Wellenreiten"
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each of your Benched Pokémon.",
				fr: "Infligez 10 dégâts plus 10 dégâts supplémentaires pour chacun des Pokémon de votre Banc.",
				de: "Fügt 10 Schadenspunkte plus 10 weitere Schadenspunkte für jedes Pokémon auf deiner Bank zu."
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
	},

	thirdParty: {
		cardmarket: 273813
	}
}

export default card
