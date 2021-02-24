import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Skuntank",
		fr: "Moufflair",
	},
	illustrator: "Studio Bora Inc.",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		435,
	],
	hp: 120,
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
				"Colorless",
			],
			name: {
				en: "Sticky Smokescreen",
				fr: "Brouillard Collant",
			},
			effect: {
				en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips 2 coins. If either of them is tails, that attack does nothing.",
				fr: "Si le Pokémon Défenseur essaie d’attaquer pendant le prochain tour de votre adversaire, ce dernier lance 2 pièces. S’il obtient au moins un côté pile, cette attaque ne fait rien.",
			},
			damage: 50,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Hammer In",
				fr: "Enfoncement",
			},

			damage: 100,

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
	retreat: 3,



}

export default card
