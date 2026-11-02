import { Card } from '../../../interfaces'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		en: "Ho-Oh-GX",
		fr: "Ho-Oh-GX",
		de: "Ho-Oh-GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		250,
	],
	hp: 190,
	types: [
		"Fire",
	],


	suffix: "GX",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sacred Fire",
				fr: "Feu Sacré",
				de: "Läuterfeuer"
			},
			effect: {
				en: "This attack does 50 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 50 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				de: "Diese Attacke fügt 1 Pokémon deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Phoenix Burn",
				fr: "Éclat du Phénix",
				de: "Phönix-Brand"
			},
			effect: {
				en: "This Pokémon can't use Phoenix Burn during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Éclat du Phénix pendant votre prochain tour.",
				de: "Dieses Pokémon kann Phönix-Brand während deines nächsten Zuges nicht einsetzen."
			},
			damage: 180,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Eternal Flame-GX",
				fr: "Flamme Éternelle-GX",
				de: "Ewige Flamme-GX"
			},
			effect: {
				en: "Put 3 in any combination of Fire Pokémon-GX or Fire Pokémon-EX from your discard pile onto your Bench. (You can't use more than 1 GX attack in a game.)",
				fr: "Ajoutez de votre pile de défausse à votre Banc une combinaison de 3 cartes choisies parmi des Pokémon-GX Fire et des Pokémon-EX Fire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				de: "Lege eine beliebige Kombination aus 3 {R}-Pokémon-GX oder {R}-Pokémon-EX aus deinem Ablagestapel auf deine Bank. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
