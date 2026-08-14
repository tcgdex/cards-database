import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Reshiram",
		fr: "Reshiram",
		es: "Reshiram",
		it: "Reshiram",
		pt: "Reshiram",
		de: "Reshiram"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		643,
	],

	hp: 130,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Purifying Flame",
				fr: "Flamme Purifiante",
				de: "Reinigende Flamme"
			},
			effect: {
				en: "Remove all Special Conditions from this Pokémon.",
				fr: "Retirez tous les États Spéciaux de ce Pokémon.",
				de: "Alle Speziellen Zustände auf diesem Pokémon verlieren ihre Wirkung."
			},
			damage: 50,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fusion Flare",
				fr: "Flamme Croix",
				de: "Kreuzflamme"
			},
			effect: {
				en: "If Zekrom is on your Bench, this attack does 40 more damage.",
				fr: "Si Zekrom est sur votre Banc, cette attaque inflige 40 dégâts supplémentaires.",
				de: "Wenn sich Zekrom auf deiner Bank befindet, fügt dieser Angriff 40 weitere Schadenspunkte zu."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "This legendary Pokémon can scorch the world with fire. It helps those who want to build a world of truth.",
		de: "Ein Legendäres Pokémon mit der Macht, die Welt mit seinen Flammen einzuäschern. Hilft allen, die nach Wirklichkeit streben."
	},

	thirdParty: {
		cardmarket: 280895,
		tcgplayer: 88708
	}
}

export default card
