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
			},
			effect: {
				en: "Move an Energy attached to the Defending Pokémon to 1 of your opponent's Benched Pokémon.",
				fr: "Déplacez une Énergie attachée au Pokémon Défenseur vers 1 des Pokémon de Banc de votre adversaire.",
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

	thirdParty: {
		cardmarket: 280948,
		tcgplayer: 86546
	}
}

export default card
