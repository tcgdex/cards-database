import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Sandslash",
		fr: "Sablaireau",
		de: "Sandamer"
	},

	illustrator: "Yukiko Baba",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		28,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Sandshrew",
		fr: "Sabelette",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Poison Sting",
				fr: "Dard-venin",
				de: "Giftstachel"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Das Verteidigende Pokémon ist jetzt vergiftet."
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fury Swipes",
				fr: "Combo-griffe",
				de: "Kratzfurie"
			},
			effect: {
				en: "Flip 3 coins. This attack does 30 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
				de: "Wirf 3 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30x",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		en: "If it digs at an incredible pace, it may snap off its spike and claws. They grow back in a day."
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		cardmarket: 279001,
		tcgplayer: 88934
	}
}

export default card
