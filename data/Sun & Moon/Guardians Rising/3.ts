import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Victreebel",
		fr: "Empiflor",
	},
	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		71,
	],
	hp: 140,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Weepinbell",
		fr: "Boustiflor",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Pollen Hazard",
				fr: "Pollen Dangereux",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Burned, Confused, and Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé, Confus et Empoisonné.",
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Stick and Absorb",
				fr: "Colle et Absorbe",
			},
			effect: {
				en: "Heal 20 damage from this Pokémon. The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Soignez 20 dégâts à ce Pokémon. Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
