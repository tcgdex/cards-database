import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Tangrowth",
		fr: "Bouldeneu"
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		465,
	],
	hp: 110,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Tangela",
		fr: "Saquedeneu",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Green Renewal",
				fr: "Renouvellement vert",
			},
			effect: {
				en: "Remove 1 damage counter from Tangrowth between turns.",
				fr: "Retirez à Bouldeneu 1 marqueur de dégât entre deux tours.",
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
				en: "Green Acid",
				fr: "Acide vert",
			},
			effect: {
				en: "Flip 2 coins. If the first coin is heads, the Defending Pokémon is now Confused. If the second coin is heads, the Defending Pokémon is now Poisoned.",
				fr: "Lancez 2 pièces. Si la première pièce est face, le Pokémon Défenseur est maintenant Confus. Si la deuxième pièce est face, le Pokémon Défenseur est maintenant Empoisonné.",
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Reaching Vine",
				fr: "Liane d'accès",
			},
			effect: {
				en: "Does 20 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 20 dégâts à 2 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
