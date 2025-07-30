import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Magnemite",
		de: "Magnetilo"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		81,
	],

	hp: 40,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Thunder Wave",
				de: "Donnerwelle"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				de: "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon jetzt gelähmt."
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Magnetic Lines",
				de: "Magnetische Linien"
			},
			effect: {
				en: "If the Defending Pokémon has any basic Energy cards attached to it, flip a coin. If heads, choose 1 of those Energy cards and move it to 1 of your opponent's Benched Pokémon. If your opponent has no Benched Pokémon, ignore this effect.",
				de: "Wirf eine Münze, falls an das verteidigende Pokémon mindestens eine Basis-Energiekarte angelegt ist. Wähle bei 'Kopf' 1 dieser Energiekarten und lege sie auf 1 der Pokémon auf der Bank deines Gegners. Hat dein Gegner kein Pokémon auf seiner Bank, ignoriere diesen Effekt."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275334,
		tcgplayer: 87069
	}
}

export default card
