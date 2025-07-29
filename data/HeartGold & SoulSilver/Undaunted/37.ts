import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Skuntank",
		fr: "Moufflair",
		de: "Skunktank"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		435,
	],

	hp: 80,

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
				en: "Stun Gas",
				fr: "Gaz étourdissant",
				de: "Betäubungsgas"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned. If tails, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Défenseur est maintenant Empoisonné. Si c’est pile, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf eine Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt vergiftet. Bei \"Zahl\" ist das Verteidigende Pokémon jetzt gelähmt."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Fury Swipes",
				fr: "Combo-griffe",
				de: "Kratzfurie"
			},
			effect: {
				en: "Flip 3 coins. This attack does 30 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
				de: "Wirf 3 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30x",

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
		en: "It attacks by spraying a repugnant fluid from its tail, but the stench dulls after a few squirts."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279290
	}
}

export default card
