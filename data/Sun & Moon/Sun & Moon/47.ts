import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Pyukumuku",
		fr: "Concombaffe",
	},
	illustrator: "You Iribi",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		771,
	],
	hp: 60,
	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Innards Out",
				fr: "Expuls’Organes",
			},
			effect: {
				en: "If this Pokémon is your Active Pokémon and is Knocked Out by damage from an opponent's attack, put 6 damage counters on the Attacking Pokémon.",
				fr: "Si ce Pokémon est votre Pokémon Actif et est mis K.O. par les dégâts d’une attaque de votre adversaire, placez 6 marqueurs de dégâts sur le Pokémon Attaquant.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Continuous Tumble",
				fr: "Roulade Continue",
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 30 damage for each heads.",
				fr: "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
