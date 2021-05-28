import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Crobat",
		fr: "Nostenfer",
	},
	illustrator: "DemizuPosuka",
	rarity: "Rare",
	category: "Trainer",

	set: Set,
	dexId: [
		169,
	],
	hp: 130,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Golbat",
		fr: "Nosferalto",
	},
	stage: "Stage2",



	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	effect: {
		en: "Your opponent's Active Pokémon is now Poisoned. Put 3 damage counters instead of 1 on that Pokémon between turns.",
		fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Placez 3 marqueurs de dégâts au lieu d’un sur le Pokémon ciblé entre chaque tour.",
	},


}

export default card
