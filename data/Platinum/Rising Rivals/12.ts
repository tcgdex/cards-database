import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Roserade GL",
		fr: "Roserade  Niv. 22",
	},
	illustrator: "Kanako Eo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		407,
	],
	hp: 80,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Poison Bind",
				fr: "Entrave toxik",
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned and can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné et ne peut pas battre en retraite lors du prochain tour de votre adversaire.",
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Long Whip",
				fr: "Long fouet",
			},
			effect: {
				en: "If the Defending Pokémon is affected by any Special Conditions, you may do 30 damage to any 1 Benched Pokémon instead. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Si le Pokémon Défenseur est affecté par n'importe lequel des États Spéciaux, vous pouvez infliger 30 dégâts à n'importe lequel des Pokémon de Banc à la place. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
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
