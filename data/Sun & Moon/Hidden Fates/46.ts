import { Card } from '../../../interfaces'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		en: "Chansey",
		fr: "Leveinard",
		de: "Chaneira"
	},

	illustrator: "sowsow",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	cameoDexIds: [7],

	dexId: [
		113,
	],

	hp: 130,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double-Edge",
				fr: "Damoclès",
				de: "Risikotackle"
			},
			effect: {
				en: "This Pokémon does 20 damage to itself.",
				fr: "Ce Pokémon s’inflige 20 dégâts.",
				de: "Dieses Pokémon fügt sich selbst 20 Schadenspunkte zu."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "It seems that other Pokémon's efforts to take its delicious, nutritious egg away from it caused Chansey to get faster at fleeing.",
		de: "Es hat gelernt, rasch davonzulaufen, da es viele Pokémon auf die nahrhaften und köstlichen Eier abgesehen haben, die es legt."
	},

	thirdParty: {
		cardmarket: 394712,
		tcgplayer: 197691
	}
}

export default card
