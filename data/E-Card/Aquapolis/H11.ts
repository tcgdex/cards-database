import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Houndoom",
		fr: "Démolosse"
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		229,
	],
	hp: 70,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Houndour",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fireworks",
				fr: "Feu d'artifice"
			},
			effect: {
				en: "Flip a coin. If tails, discard a Energy card attached to Houndoom.",
				fr: "Lancez une pièce. Si c'est pile, défaussez-vous d'une carte Énergie  attachée à Démolosse."
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
				en: "Dark Impact",
				fr: "Sombre impact"
			},
			effect: {
				en: "The Defending Pokémon can't use any Poké-Powers untill the end of your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas utiliser de Poké-Powers jusqu'à la fin du prochain tour de votre adversaire."
			},
			damage: 40,

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
			value: "-30"
		},
	],




}

export default card
