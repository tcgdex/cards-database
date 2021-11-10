import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Dark Raticate",
		fr: "Rattatac obscur"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		20,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Rattata",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gnaw",
				fr: "Machouille"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],

			name: {
				en: "Hyper Fang",
				fr: "Croc de mort"
			},

			effect: {
				en: "Flip a coin. if tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien."
			},

			damage: 50
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
		fr: "Les incisives d'un Rattatac sont incroyablement puissantes ; grâce à elle, il est capable de détruire une maison de 2 étages en 5 minutes."
	}
}

export default card
