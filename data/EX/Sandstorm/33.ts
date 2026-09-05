import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Breloom",
		fr: "Chapignon",
		de: "Kapilz"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [286],

	hp: 70,

	types: [
		"Grass"
	],

	evolveFrom: {
		en: "Shroomish",
		fr: "Balignon",
		de: "Knilz"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Super Poison Breath",
				fr: "Super haleine empoisonnée",
				de: "Super Gifthauch"
			},
			effect: {
				en: "Each Defending Pokémon is now Poisoned.",
				fr: "Chaque Pokémon Défenseur est maintenant Empoisonné.",
				de: "Alle Verteidigenden Pokémon sind jetzt vergiftet."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sky Uppercut",
				fr: "Stratopercut",
				de: "Himmelhieb"
			},
			effect: {
				en: "This attack's damage is not affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				de: "Der Schaden dieses Angriffs wird durch die Resistenz des Verteidigenden Pokémon nicht verringert."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275810,
				tcgplayer: 83954
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275810,
				tcgplayer: 83954
			}
		},
	],

}

export default card
