import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Ninjask",
		fr: "Ninjask"
	},
	illustrator: "Katsura Tabata",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		291,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Nincada",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Fast Protection",
				fr: "Protection rapide"
			},
			effect: {
				en: "Prevent all effects, including damage, done to Ninjask by your opponent's attacks from his or her Basic Pokémon.",
				fr: "Prévenez tous les effets d'une attaque, dégâts inclus, infligés à Ninjask par les attaques du Pokémon de base de votre adversaire."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Swords Dance",
				fr: "Danse-lames"
			},
			effect: {
				en: "During your next turn, Ninjask's Slash attack's base damage is 80.",
				fr: "Lors de votre prochain tour, les dégâts de base de l'attaque Tranche de Ninjask sont de 80."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche"
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
