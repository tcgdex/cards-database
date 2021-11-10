import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Flareon",
		fr: "Pyroli"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		136,
	],

	hp: 70,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Eevee",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Quick Attack",
				fr: "Vive-attaque"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage; if tails, this attack does 10 damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires ; si c'est pile, cette attaque inflige 10 dégâts."
			},
			damage: "10+",

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flamethrower",
				fr: "Lance-flammes"
			},
			effect: {
				en: "Discard 1 Energy card attached to Flareon in order to use this attack.",
				fr: "Défaussez 1 carte Énergie  attachée à Pyroli pour pouvoir utiliser cette attaque."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	description: {
		fr: "Il peut accumuler suffisamment de chaleur pour atteindre des températures de 1600 degrés."
	}
}

export default card
