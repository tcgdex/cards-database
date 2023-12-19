import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Vespiquen",
		fr: "Apireine",
		de: "Honweisel"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		416,
	],

	hp: 100,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Combee",
		fr: "Apitrini",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Defense Sign",
				fr: "Signal de défense",
				de: "Abwehrzeichen"
			},
			effect: {
				en: "Prevent all damage done to your Benched Grass Pokémon by attacks.",
				fr: "Prévenez tous les dégâts infligés par des attaques aux Pokémon Grass de votre Banc.",
				de: "Verhindere allen Schaden, der -Pokémon auf deiner Bank durch Angriffe zugefügt wird."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mach Wind",
				fr: "Vent frénétique",
				de: "Stürmische Brise"
			},
			effect: {
				en: "During your next turn, Vespiquen’s Retreat Cost is 0.",
				fr: "Pendant votre prochain tour, le Coût de retraite d’Apireine est de 0.",
				de: "Die Rückzugskosten für Honweisel betragen in deinem nächsten Zug 0."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		en: "It raises grubs in the holes in its body. It secretes pheromones to control Combee."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
