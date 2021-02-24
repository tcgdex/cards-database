import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Pidgeotto",
		fr: "Roucoups",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		17,
	],
	hp: 80,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Pidgey",
		fr: "Roucool",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sand-Attack",
				fr: "Jet de Sable",
			},
			effect: {
				en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				fr: "Si le Pokémon Défenseur essaie d'attaquer pendant le prochain tour de votre adversaire, ce dernier lance une pièce. Si c’est pile, son attaque ne fait rien.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ambush",
				fr: "Embuscade",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
