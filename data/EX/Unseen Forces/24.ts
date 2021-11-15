import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Hitmonchan",
		fr: "Tygnon"
	},
	illustrator: "Hisao Nakamura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		107,
	],
	hp: 70,
	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Stages of Evolution",
				fr: "Niveaux d'Évolution"
			},
			effect: {
				en: "As long as Hitmonchan is an Evolved Pokémon, Hitmonchan gets +30 HP.",
				fr: "Tant que Tygnon est un Pokémon Évolué, il obtient 30 Points de vie supplémentaires."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Heavy Punch",
				fr: "Poing lourd"
			},
			effect: {
				en: "Does 10 damage times the number of your opponent's Benched Pokémon.",
				fr: "Inflige 10 dégâts multipliés par le nombre de Pokémon sur le Banc de votre adversaire."
			},
			damage: "10×",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Speedy Uppercut",
				fr: "Uppercut super rapide"
			},
			effect: {
				en: "This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet sur le Pokémon Défenseur."
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
