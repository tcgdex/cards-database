import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Rapidash",
		fr: "Rapidash",
	},
	illustrator: "Suwama Chiaki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		78,
	],
	hp: 80,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Ponyta",
		fr: "Ponyta",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Burning Mane",
				fr: "Crinière en flammes",
			},
			effect: {
				en: "If Rapidash is your Active Pokémon and is damaged by an opponent's attack (even if Rapidash is Knocked Out), the Attacking Pokémon is now Burned.",
				fr: "Si Galopa est votre Pokémon Actif et qu'une attaque de votre adversaire lui inflige des dégâts (même si Galopa est mis K.O), le Pokémon Attaquant est maintenant Brûlé.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rear Kick",
				fr: "Ruade",
			},

			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Shooting Fire",
				fr: "Feu fusillant",
			},
			effect: {
				en: "Discard 2 Fire Energy attached to Rapidash and choose 1 of your opponent's Pokémon. This attack does 60 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Défaussez 2 Énergies Fire attachées à Galopa et choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 60 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],





}

export default card
