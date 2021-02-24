import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Skuntank",
		fr: "Moufflair",
	},
	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		435,
	],
	hp: 90,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Stunky",
		fr: "Moufouette",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Smogscreen",
				fr: "Brouillard Venimeux",
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned. If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné. Si le Pokémon Défenseur essaie d'attaquer pendant le prochain tour de votre adversaire, ce dernier lance une pièce. Si c'est pile, son attaque ne fait rien.",
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Hammer In",
				fr: "Enfoncer",
			},

			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
