import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Amoonguss",
		fr: "Gaulet",
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		591,
	],
	hp: 100,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Foongus",
		fr: "Trompignon",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Bursting Spores",
				fr: "Nuée de Spores",
			},
			effect: {
				en: "Whenever you play a Pokémon that has the Spore attack from your hand during your turn, you may leave your opponent's Active Pokémon Asleep and Poisoned.",
				fr: "Chaque fois que vous jouez un Pokémon qui a l’attaque Spore de votre main pendant votre tour, vous pouvez laisser le Pokémon Actif de votre adversaire Endormi et Empoisonné.",
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
				en: "Venoshock",
				fr: "Choc Venin",
			},
			effect: {
				en: "If your opponent's Active Pokémon is Poisoned, this attack does 70 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est Empoisonné, cette attaque inflige 70 dégâts supplémentaires.",
			},
			damage: 20,

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
