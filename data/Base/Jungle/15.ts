import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Vileplume",
		fr: "Raflésia"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		45,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Gloom",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Heal",
				fr: "Soins"
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, remove 1 damage counter from 1 of your Pokémon. This power can't be used if Vileplume is Asleep, Confused, or Paralyzed.",
				fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, retirez 1 marqueur de dégâts d'un de vos Pokémon. Ce pouvoir ne peut être utilisé si Raflésia est Endormi, Confus, ou Paralysé."
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
				en: "Petal Dance",
				fr: "Danse-fleur"
			},
			effect: {
				en: "Flip 3 coins. This attack does 40 damage times the number of heads. Vileplume is now Confused (after doing damage).",
				fr: "Lancez 3 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de faces. Raflésia est maintenant Confus (après résolution des dégâts)."
			},
			damage: "40×",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	description: {
		fr: "Plus ses pétales sont grands, plus ils contiennent de pollen toxique."
	}
}

export default card
