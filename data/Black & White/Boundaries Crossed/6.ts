import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Tangrowth",
		fr: "Bouldeneu",
	},
	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		465,
	],
	hp: 130,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Tangela",
		fr: "Saquedeneu",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Hundred Furious Lashes",
				fr: "Multifouets Furieux",
			},
			effect: {
				en: "Does 30 damage times the amount of Grass Energy attached to this Pokémon. This Pokémon can't use Hundred Furious Lashes during your next turn.",
				fr: "Inflige 30 dégâts multipliés par le nombre d'Énergies Grass attachées à ce Pokémon. Ce Pokémon ne peut pas utiliser Multifouets Furieux pendant votre prochain tour.",
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mega Drain",
				fr: "Méga-Sangsue",
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts à ce Pokémon.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],
	retreat: 4,



}

export default card
