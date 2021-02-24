import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Aegislash",
		fr: "Exagide",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		681,
	],
	hp: 140,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Doublade",
		fr: "Dimoclès",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Royal Guard",
				fr: "Barrière Royale",
			},
			effect: {
				en: "This Pokémon takes 40 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Ce Pokémon subit 40 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Shield Bash",
				fr: "Brusque Parade",
			},
			effect: {
				en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
				fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			},
			damage: 100,

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
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
