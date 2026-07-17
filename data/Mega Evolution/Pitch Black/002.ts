import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	description: {
		en: "It spits sticky thread and winds them around branches, then swings nimbly from tree to tree in a pendulum-like motion.",
		de: "Es spuckt klebrige Fäden, die es um Äste wickelt, um sich dann mit pendelnden Bewegungen geschickt von Baum zu Baum zu schwingen."
	},

	name: {
		en: "Grubbin",
		fr: "Larvibule",
		es: "Grubbin",
		'es-mx': "Grubbin",
		de: "Mabula"
	},

	illustrator: "Mina Nakai",
	rarity: "Common",
	category: "Pokemon",
	dexId: [736],
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "String Shot",
			de: "Fadenschuss"
		},

		cost: ["Colorless"],

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895790,
				tcgplayer: 704759
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895790,
				tcgplayer: 704759
			}
		},
	],
}

export default card
