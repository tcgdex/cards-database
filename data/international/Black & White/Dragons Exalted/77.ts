import { Card } from 'models/database/card'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		'en-us': "Skuntank",
		'fr-fr': "Moufflair",
		'es-es': "Skuntank",
		'it-it': "Skuntank",
		'pt-br': "Skuntank",
		'de-de': "Skuntank"
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
		'en-us': "Stunky",
		'fr-fr': "Moufouette",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Smogscreen",
				'fr-fr': "Brouillard Venimeux",
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned. If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné. Si le Pokémon Défenseur essaie d'attaquer pendant le prochain tour de votre adversaire, ce dernier lance une pièce. Si c'est pile, son attaque ne fait rien.",
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
				'en-us': "Hammer In",
				'fr-fr': "Enfoncer",
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
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

	description: {
		'en-us': "It attacks by spraying a horribly smelly fluid from the tip of its tail. Attacks from above confound it.",
	},

	thirdParty: {
		cardmarket: 280516,
		tcgplayer: 89283
	}
}

export default card
