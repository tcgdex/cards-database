import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Whimsicott",
		fr: "Farfaduvet",
		es: "Whimsicott",
		it: "Whimsicott",
		pt: "Whimsicott",
		de: "Elfun"
	},

	illustrator: "Mizue",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		547,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Cottonee",
		fr: "Doudouvet",
		de: "Waumboll"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Encore",
				fr: "Encore",
				de: "Zugabe"
			},
			effect: {
				en: "Choose 1 of the Defending Pokémon's attacks. During your opponent's next turn, that Pokémon can use only that attack.",
				fr: "Choisissez 1 des attaques du Pokémon Défenseur. Pendant le prochain tour de votre adversaire, le Pokémon ciblé ne peut utiliser que l'attaque choisie.",
				de: "Wähle 1 Angriff des Verteidigenden Pokémon. Dieses Pokémon kann während des nächsten Zuges deines Gegners nur den gewählten Angriff einsetzen."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "U-turn",
				fr: "Demi-Tour",
				de: "Kehrtwende"
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Échangez ce Pokémon avec 1 de vos Pokémon de Banc.",
				de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "Riding whirlwinds, they appear. These Pokémon sneak through gaps into houses and cause all sorts of mischief.",
		de: "Es kommt auf Sturmböen geritten und dringt durch kleine Spalten in Häuser ein, um dort Schabernack zu treiben."
	},

	thirdParty: {
		cardmarket: 279976,
		tcgplayer: 90568
	}
}

export default card
