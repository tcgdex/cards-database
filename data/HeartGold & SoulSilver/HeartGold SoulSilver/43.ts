import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Heracross",
		fr: "Scarhino",
		de: "Skaraborn"
	},

	illustrator: "Sachiko Adachi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		214,
	],

	hp: 80,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Green Draw",
				fr: "Pioche verte",
				de: "Grüner Zug"
			},
			effect: {
				en: "Draw a card for each of your Grass Pokémon in play.",
				fr: "Piochez une carte pour chacun de vos Pokémon Grass en jeu.",
				de: "Ziehe eine Karte für jedes deiner -Pokémon im Spiel."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Headbutt",
				fr: "Double coup d’boule",
				de: "Doppelte Kopfnuss"
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 damage plus 20 more damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires pour chaque face.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 30 Schadenspunkte plus 20 weitere Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "This powerful Pokémon thrusts its prized horn under its enemies’ bellies, then lifts and throws them."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
