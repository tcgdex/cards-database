import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Gliscor",
		fr: "Scorvol",
		es: "Gliscor",
		it: "Gliscor",
		pt: "Gliscor",
		de: "Skorgro"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		472,
	],

	hp: 100,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Gligar",
		fr: "Scorplane",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Poison Ring",
				fr: "Anneau de Poison",
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned. The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné. Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Night Slash",
				fr: "Tranche-Nuit",
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Échangez ce Pokémon avec 1 de vos Pokémon de Banc.",
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 280668
	}
}

export default card
