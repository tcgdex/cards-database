import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Electrode",
		fr: "Électrode"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		101,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Voltorb",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Buzzap",
				fr: "Buzzap"
			},
			effect: {
				en: "At any time during your turn (before your attack) you may Knock Out Electrode and attach it to 1 of your other Pokémon. If you do, chose a type of Energy. Electrode is now an Energy card (instead of a Pokémon) that provides 2 energy of that type. This power can't be used if Electrode is Asleep, Confused, or Paralyzed.",
				fr: "N'importe quand durant votre tour (avant votre attaque), vous pouvez mettre Électrode K.O. et l'attacher à 1 de vos autres Pokémon. Si vous le faites, choisissez un type d'Énergie. Électrode est maintenant une carte Énergie (au lieu d'un Pokémon) qui fournit 2 Énergies de ce type. Ce pouvoir ne peut être utilisé si Électrode est Endormi, Confus ou Paralysé."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Electric Shock",
				fr: "Choc Électrique"
			},
			effect: {
				en: "Flip a coin. If tails, Electrode does 10 damage to itself.",
				fr: "Lancez une pièce. Si c'est pile, Électrode s'inflige 10 dégâts."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	description: {
		fr: "Il emmagasine des quantités énormes de courant électrique sous pression pouvant exploser."
	}
}

export default card
