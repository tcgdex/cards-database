import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Skuntank",
		fr: "Moufflair",
		es: "Skuntank",
		it: "Skuntank",
		pt: "Skuntank",
		de: "Skuntank"
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
		de: "Skunkapuh"
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
				de: "Smogwolke"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned. If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné. Si le Pokémon Défenseur essaie d'attaquer pendant le prochain tour de votre adversaire, ce dernier lance une pièce. Si c'est pile, son attaque ne fait rien.",
				de: "Das Verteidigende Pokémon ist jetzt vergiftet. Falls das Verteidigende Pokémon während des nächsten Zuges deines Gegners angreift, wirft dein Gegner 1 Münze. Bei „Zahl“ hat dieser Angriff keine Auswirkungen."
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
				de: "Einhämmern"
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
		en: "It attacks by spraying a horribly smelly fluid from the tip of its tail. Attacks from above confound it.",
		de: "Greift mit einer Substanz aus der Spitze seines Schweifs an. Angriffe von oben verblüffen es."
	},

	thirdParty: {
		cardmarket: 280516,
		tcgplayer: 89283
	}
}

export default card
