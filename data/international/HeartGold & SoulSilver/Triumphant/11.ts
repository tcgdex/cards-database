import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Venomoth",
		'fr-fr': "Aéromite",
		'de-de': "Omot"
	},

	illustrator: "Hideaki Hakozaki",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [49],

	hp: 80,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Venonat",
		'fr-fr': "Mimitoss"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Poison Moth Wind",
				'fr-fr': "Vent de Papipoison",
				'de-de': "Giftmottenwind"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may flip a coin. If heads, your opponent's Active Pokémon is now Poisoned. If tails, your Active Pokémon is now Poisoned. This power can't be used if Venomoth is affected by a Special Condition.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Empoisonné. Si c’est pile, votre Pokémon Actif est maintenant Empoisonné. Ce Poké-Power ne peut pas être utilisé si Aéromite est affecté par un État Spécial.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du eine Münze werfen. Bei \"Kopf\" ist das Aktive Pokémon deines Gegners jetzt vergiftet. Bei \"Zahl\" ist dein Aktives Pokémon jetzt vergiftet. Diese Poké-Power kann nicht benutzt werden, wenn Omot von einem Speziellen Zustand betroffen ist."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Stun Spore",
				'fr-fr': "Para-spore",
				'de-de': "Stachelspore"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
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
		'en-us': "The powder on its wings is poisonous if it is dark in hue. If it is light in hue, it causes paralysis."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 90303,
				cardmarket: 279541
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279541,
				tcgplayer: 90303
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 125070
			}
		},
	],

}

export default card
