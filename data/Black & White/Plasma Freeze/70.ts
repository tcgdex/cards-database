import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Krookodile",
		fr: "Crocorible",
		es: "Krookodile",
		it: "Krookodile",
		pt: "Krookodile",
		de: "Rabigator"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		553,
	],

	hp: 140,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Krokorok",
		fr: "Escroco",
		de: "Rokkaiman"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Piston Headbutt",
				fr: "Coup de Piston",
				de: "Kolbenschwinger"
			},
			effect: {
				en: "Move an Energy attached to the Defending Pokémon to 1 of your opponent's Benched Pokémon.",
				fr: "Déplacez une Énergie attachée au Pokémon Défenseur vers 1 des Pokémon de Banc de votre adversaire.",
				de: "Verschiebe 1 an das Verteidigende Pokémon angelegte Energie auf 1 Pokémon auf der Bank deines Gegners."
			},
			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
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

	retreat: 3,

	description: {
		en: "Very violent Pokémon, they try to clamp down on anything that moves in front of their eyes.",
		de: "Ein äußerst grausames Pokémon. Es greift jeden, der ihm unter die Augen kommt, mit seinen scharfen Reißzähnen an."
	},

	thirdParty: {
		cardmarket: 280948,
		tcgplayer: 86546
	}
}

export default card
