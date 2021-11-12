import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Wigglytuff",
		fr: "Grodoudou"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		40,
	],
	hp: 90,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Jigglypuff",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Fluffy Fur",
				fr: "Douce fourrure"
			},
			effect: {
				en: "If Wigglytuff is your Active Pokémon and is damaged by an opponent's attack (even if Wigglytuff is Knocked Out), the Attacking Pokémon is now Asleep.",
				fr: "Si Grodoudou est votre Pokémon Actif et qu'une attaque de votre adversaire lui inflige des dégâts (même si Grodoudou est mis K.O), le Pokémon Attaquant est maintenant Endormi."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Collect",
				fr: "Collectionner"
			},
			effect: {
				en: "Draw 3 cards.",
				fr: "Piochez 3 cartes."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pester",
				fr: "Abattre"
			},
			effect: {
				en: "If the Defending Pokémon is affected by a Special Condition, this attack does 30 damage plus 20 more damage.",
				fr: "Si le Pokémon Défenseur est affecté par un État Spécial, cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires."
			},
			damage: "30+",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],





}

export default card
