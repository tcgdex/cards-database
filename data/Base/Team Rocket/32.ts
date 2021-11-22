import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Dark Charmeleon",
		fr: "Reptincel Obscur"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		5,
	],

	hp: 50,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Charmander",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tail Slap",
				fr: "Coud'keu"
			},

			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
			],

			name: {
				en: "Fireball",
				fr: "Boule de feu"
			},

			effect: {
				en: "Use this attack only if there are any Energy cards attached to Dark Charmeleon. Flip a coin. If heads, discard 1 of those Energy cards. If tails, this attack does nothing (not even damage).",
				fr: "N'utilisez cette attaque que si des Énergies  sont attachées à Reptincel Obscur. Lancez une pièce. Si c'est face, défaussez 1 de ces cartes Énergies. Si c'est pile, cette attaque ne fait rien (pas même de dégâts)."
			},

			damage: 70
		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	description: {
		fr: "Sa queue incroyablement puissante est capable de soulever 5 hommes."
	},

	variants: {
		wPromo: true
	}
}

export default card
