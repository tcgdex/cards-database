import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Koffing",
		fr: "Smogo Niv. 22",
		de: "Smogon"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		109,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Offensive Gas",
				fr: "Gaz offensif",
				de: "Gasattacke"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused and Poisoned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus et Empoisonné.",
				de: "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt verwirrt und vergiftet."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Gas Bomb",
				fr: "Bombe à gaz",
				de: "Gasbombe"
			},
			effect: {
				en: "Koffing does 30 damage to itself, and don't apply Weakness and Resistance to this damage.",
				fr: "Smogo s'inflige 30 dégâts. N'appliquez pas la Faiblesse et la Résistance à ces dégâts.",
				de: "Smogon fügt sich selbst 30 Schadenspunkte zu, wende dabei Schwäche und Resistenz nicht an."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 278642,
		tcgplayer: 86497
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
