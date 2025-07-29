import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Dark Raticate",
		fr: "Rattatac obscur",
		de: "Dunkles Rattikarl"
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
				fr: "Machouille",
				de: "Nagen"
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
				fr: "Croc de mort",
				de: "Hyperzahn"
			},

			effect: {
				en: "Flip a coin. if tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				de: "Wirf eine Münze. Bei 'Zahl' fügt dieser Angriff keine Schadenspunkte zu."
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
	},

	thirdParty: {
		cardmarket: 274104
	}
}

export default card
