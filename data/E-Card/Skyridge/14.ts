import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Kabutops",
		de: "Kabutops"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		141,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Kabuto",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Primal Aura",
				de: "Ursprüngliche Aura"
			},
			effect: {
				en: "As long as Kabutops is your Active Pokémon, neither player can play Basic Pokémon or Evolution cards from his or her hand to evolve Benched Pokémon.",
				de: "Solange Kabutops dein aktives Pokémon ist, kann keiner der Spieler Basis- Pokémon oder Entwicklungskarten aus seiner Hand spielen, um Pokémon auf seiner Bank zu entwickeln."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Dual Cut",
				de: "Doppel-Zerschneider"
			},
			effect: {
				en: "Flip 2 coins. This attack does 50 damage times the number of heads.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 50 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "50x",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275240,
		tcgplayer: 86392
	}
}

export default card
