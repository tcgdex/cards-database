import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Genesect",
		fr: "Genesect",
		es: "Genesect",
		it: "Genesect",
		pt: "Genesect",
		de: "Genesect"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		649,
	],

	hp: 100,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Call for Family",
				fr: "Appel à la Famille",
				de: "Familienruf"
			},
			effect: {
				en: "Search your deck for 2 Grass Basic Pokémon and put them onto your Bench. Shuffle your deck afterward.",
				fr: "Cherchez 2 Pokémon Grass de base dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
				de: "Durchsuche dein Deck nach 2 {G}-Basis-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Jet Impact",
				fr: "Impact Aérien",
				de: "Düsendruck"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
				de: "Wirf 1 Münze. Bei „Kopf“ fügt dieser Angriff 20 weitere Schadenspunkte zu."
			},
			damage: 80,

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
		en: "This Pokémon existed 300 million years ago. Team Plasma altered it and attached a cannon to its back.",
		de: "Es lebte vor 300 Millionen Jahren. Team Plasma modifizierte es und pflanzte ihm am Rücken eine Kanone ein."
	},

	thirdParty: {
		cardmarket: 281031,
		tcgplayer: 85661
	}
}

export default card
