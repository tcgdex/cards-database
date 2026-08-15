import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Golurk",
		fr: "Golemastoc",
		es: "Golurk",
		it: "Golurk",
		pt: "Golurk",
		de: "Golgantes"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		623,
	],

	hp: 130,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Golett",
		fr: "Gringolem",
		de: "Golbit"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Devolution Punch",
				fr: "Beigne Dés-évoluante",
				de: "Rückentwicklungshieb"
			},
			effect: {
				en: "Devolve the Defending Pokémon and put the highest Stage Evolution card on it into your opponent's hand.",
				fr: "Faites dés-évoluer le Pokémon Défenseur et mettez sa carte Évolution de plus haut Niveau dans la main de votre adversaire.",
				de: "Rückentwickle das Verteidigende Pokémon. Dein Gegner nimmt die höchste daraufliegende Evolutionskarte auf seine Hand."
			},
			damage: 60,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ghost Hammer",
				fr: "Spectro Maillet",
				de: "Geisterhammer"
			},
			effect: {
				en: "During your opponent's next turn, this Pokémon has no Weakness.",
				fr: "Pendant le prochain tour de votre adversaire, ce Pokémon n'a pas de Faiblesse.",
				de: "Während des nächsten Zuges deines Gegners hat dieses Pokémon keine Schwäche."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		en: "This extremely rare Pokémon is a different color than usual. It is very hard to find.",
		de: "Dieses sehr seltene Pokémon hat eine andere Farbe als üblich. Es ist schwer zu finden."
	},

	thirdParty: {
		cardmarket: 280737,
		tcgplayer: 85837
	}
}

export default card
