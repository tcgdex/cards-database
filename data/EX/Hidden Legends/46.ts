import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Rhydon",
		fr: "Rhinoferos"
	},
	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		112,
	],
	hp: 90,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Rhyhorn",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Power Diffusion",
				fr: "Transmission de pouvoir"
			},
			effect: {
				en: "As long as Rhydon is your Active Pokémon, prevent all damage done by attacks to all of your Benched Pokémon.",
				fr: "Tant que Rhinoféros est votre Pokémon Actif, prévenez tous les dégâts infligés par des attaques à vos Pokémon de Banc"
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Horn Drill",
				fr: "Empal'korne"
			},

			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hyper Tail",
				fr: "Hyper-queue"
			},
			effect: {
				en: "If the Defending Pokémon has any Poké-Powers or Poké-Bodies, this attack does 50 damage plus 20 more damage.",
				fr: "Si le Pokémon Défenseur possède des Poké-Powers ou des Poké-Bodies, cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires."
			},
			damage: "50+",

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
