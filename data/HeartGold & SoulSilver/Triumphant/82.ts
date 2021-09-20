import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Volbeat",
		fr: "Muciole",
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		313,
	],

	hp: 70,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Illumisile",
				fr: "Lumissile",
			},
			effect: {
				en: "If you don’t have Illumise in play, this attack does nothing. Choose 1 of your opponent’s Benched Pokémon. This attack does 30 damage to that Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Si vous ne disposez pas de Lumivole en jeu, cette attaque ne fait rien. Choisissez l’un des Pokémon de Banc de votre adversaire. Cette attaque inflige 30 dégâts à ce Pokémon. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Firefly Light",
				fr: "Lumière de Luciole",
			},
			effect: {
				en: "The Defending Pokémon is now Burned and Confused.",
				fr: "Le Pokémon Défenseur est maintenant Brûlé et Confus.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "It emits light from its tail to communicate. It loves the sweet aroma given off by Illumise."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
