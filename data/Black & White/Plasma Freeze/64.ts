import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Umbreon",
		fr: "Noctali",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		197,
	],
	hp: 100,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Dark Shade",
				fr: "Ombre Ténébreuse",
			},
			effect: {
				en: "Each of your Team Plasma Pokémon in play gets +20 HP.",
				fr: "Ajoute 20 PV à chacun de vos Pokémon de la Team Plasma en jeu.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Darkness Fang",
				fr: "Croc Obscur",
			},

			damage: 70,

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
