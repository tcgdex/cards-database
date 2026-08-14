import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Donphan",
		fr: "Donphan",
		es: "Donphan",
		it: "Donphan",
		pt: "Donphan",
		de: "Donphan"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		232,
	],

	hp: 130,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Phanpy",
		fr: "Phanpy",
		de: "Phanpy"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Spinning Turn",
				fr: "Volte-Face",
				de: "Fliegender Wechsel"
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Échangez ce Pokémon avec 1 de vos Pokémon de Banc.",
				de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
			},
			damage: 40,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wreck",
				fr: "Anéantissement",
				de: "Abreißen"
			},
			effect: {
				en: "If there is any Stadium card in play, this attack does 60 more damage. Discard that Stadium card.",
				fr: "S'il y a une carte Stade en jeu, cette attaque inflige 60 dégâts supplémentaires. Défaussez la carte Stade.",
				de: "Wenn eine Stadionkarte im Spiel ist, fügt dieser Angriff 60 weitere Schadenspunkte zu. Lege diese Stadionkarte auf den Ablagestapel."
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

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 4,

	description: {
		en: "It attacks by curling up, then rolling into its foe. It can blow apart a house in one hit.",
		de: "Wenn es angreift, rollt es sich zusammen und auf den Gegner zu. Es kann Häuser zum Einsturz bringen."
	},

	thirdParty: {
		cardmarket: 280812,
		tcgplayer: 84880
	}
}

export default card
