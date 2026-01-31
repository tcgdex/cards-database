import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Ninjask",
		fr: "Ninjask",
		de: "Ninjask"
	},

	illustrator: "Katsura Tabata",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		291,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Nincada",
		fr: "Ningale"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Fast Protection",
				fr: "Protection rapide",
				de: "Fast Protection"
			},
			effect: {
				en: "Prevent all effects, including damage, done to Ninjask by your opponent's attacks from his or her Basic Pokémon.",
				fr: "Prévenez tous les effets d'une attaque, dégâts inclus, infligés à Ninjask par les attaques du Pokémon de base de votre adversaire.",
				de: "Prevent all effects, including damage, done to Ninjask by your opponent´s attacks from his or her Basic Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Swords Dance",
				fr: "Danse-lames",
				de: "Swords Dance"
			},
			effect: {
				en: "During your next turn, Ninjask's Slash attack's base damage is 80.",
				fr: "Lors de votre prochain tour, les dégâts de base de l'attaque Tranche de Ninjask sont de 80.",
				de: "During your next turn, Ninjask´s Slash attack´s base damage is 80."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
				de: "Slash"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 0,

	thirdParty: {
		tcgplayer: 87785,
		cardmarket: 276416
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
