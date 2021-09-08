import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Venomoth",
		fr: "Aéromite",
	},
	illustrator: "Hideaki Hakozaki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		49,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Venonat",
		fr: "Mimitoss",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Poison Moth Wind",
				fr: "Vent de Papipoison",
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, your opponent’s Active Pokémon is now Poisoned. If tails, your Active Pokémon is now Poisoned. This power can’t be used if Venomoth is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Empoisonné. Si c’est pile, votre Pokémon Actif est maintenant Empoisonné. Ce Poké-Power ne peut pas être utilisé si Aéromite est affecté par un État Spécial.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Stun Spore",
				fr: "Para-spore",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Défenseur est maintenant Paralysé.",
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



}

export default card
