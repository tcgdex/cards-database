import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Shuckle",
		fr: "Caratroc",
		de: "Pottrott"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		213,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				fr: "Coquille barricade",
				de: "Panzersperre"
			},
			effect: {
				fr: "Tant que Caratroc est sur le Banc, prévenez tous les dégâts infligés à Caratroc par des attaques (les vôtres et celles de votre adversaire).",
				de: "Solange sich Pottrott auf deiner Bank befindet, verhindere allen Schaden, der Pottrott durch Angriffe (deine oder die deines Gegners) zugefügt würde."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Poison Jab",
				fr: "Direct Toxik",
				de: "Gifthieb"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Das Verteidigende Pokémon ist jetzt vergifet."
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
		en: "The berries it stores in its vase-like shell decompose and become a gooey liquid."
	},

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 278983,
		tcgplayer: 89192
	}
}

export default card
