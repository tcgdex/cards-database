import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Pidgeot",
		fr: "Roucarnage",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		18,
	],
	hp: 120,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Pidgeotto",
		fr: "Roucoups",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mirror Move",
				fr: "Mimique",
			},
			effect: {
				en: "If Pidgeot was damaged by an attack during your opponent's last turn, this attack does the same amount of damage done to Pidgeot to the Defending Pokémon.",
				fr: "Si une attaque a infligé des dégâts à Roucarnage lors du dernier tour de votre adversaire, cette attaque inflige le même nombre de dégâts au Pokémon Défenseur.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Whirlwind",
				fr: "Cyclone",
			},
			effect: {
				en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+30"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],




}

export default card
