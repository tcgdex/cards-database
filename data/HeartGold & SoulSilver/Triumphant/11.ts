import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Venomoth",
		fr: "Aéromite",
		de: "Omot"
	},

	illustrator: "Hideaki Hakozaki",
	rarity: "Rare Holo",
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
				de: "Giftmottenwind"
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, your opponent’s Active Pokémon is now Poisoned. If tails, your Active Pokémon is now Poisoned. This power can’t be used if Venomoth is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Empoisonné. Si c’est pile, votre Pokémon Actif est maintenant Empoisonné. Ce Poké-Power ne peut pas être utilisé si Aéromite est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du eine Münze werfen. Bei \"Kopf\" ist das Aktive Pokémon deines Gegners jetzt vergiftet. Bei \"Zahl\" ist dein Aktives Pokémon jetzt vergiftet. Diese Poké-Power kann nicht benutzt werden, wenn Omot von einem Speziellen Zustand betroffen ist."
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
				de: "Stachelspore"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf eine Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
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
		en: "The powder on its wings is poisonous if it is dark in hue. If it is light in hue, it causes paralysis."
	},

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
