import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Heracross",
		fr: "Scarhino"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		214,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Final Blow",
				fr: "Souffle final"
			},
			effect: {
				en: "If Heracross's remaining HP are 20 or less, you may make its Megahorn attack's base damage 120 instead of 60. This power can't be used if Heracross is Asleep, Confused, or Paralyzed.",
				fr: "Si Scarhino a 20 points de vie ou moins, vous pouvez changer les dégâts de son attaque Megacorne pour 120 au lieu de 60. Ce pouvoir ne peut être utilisé si Scarhino est Endormi, Confus ou Paralysé."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
			],

			name: {
				en: "Megahorn",
				fr: "Megacorne"
			},

			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien."
			},

			damage: 60
		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	description: {
		fr: "Ce puissant Pokémon enfonce sa corne très recherchée sous le ventre de ses ennemis, puis les soulève et les jette au loin."
	}
}

export default card
