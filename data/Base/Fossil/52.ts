import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Omanyte",
		fr: "Amonita"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		138,
	],

	hp: 40,

	types: [
		"Water",
	],

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Clairvoyance",
				fr: "Clairvoyance"
			},
			effect: {
				en: "Your opponent plays with his or her hand face up. This power stops working while Omanyte is Asleep, Confused, or Paralyzed.",
				fr: "Votre adversaire joue avec sa main révélée. Ce pouvoir cesse de fonctionner lorsqu'Amonita est Endormi, Confus ou Paralysé."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Water Gun",
				fr: "Pistolet à O"
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each Energy attached to Omanyte but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
				fr: "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque Énergie  attachée à Amonita en plus du coût en Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette façon."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	description: {
		fr: "Disparu depuis longtemps, il peut être réanimé génétiquement à partir d'anciens fossiles."
	}
}

export default card
