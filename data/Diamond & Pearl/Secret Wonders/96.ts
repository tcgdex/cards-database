import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Natu",
		fr: "Natu",
		de: "Natu"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		177,
	],

	hp: 40,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Bothering Wave",
				fr: "Vague inquiétante",
				de: "Störende Welle"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing. If heads, discard an Energy card attached to the Defending Pokémon.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet. Si c'est face, défaussez une carte Énergie attachée au Pokémon Défenseur.",
				de: "Wirf 1 Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen. Bei \"Kopf\" lege eine am Verteidigenden Pokémon angelegte Energiekarte auf den Ablagestapel deines Gegners."
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Future Sight",
				fr: "Prescience",
				de: "Seher"
			},
			effect: {
				en: "Look at the top 5 cards of either player's deck and put them back on top of that player's deck in any order.",
				fr: "Regardez les 5 cartes du dessus du deck de chaque joueur et replacez-les au dessus du deck de chaque joueur dans n'importe quel ordre.",
				de: "Schau dir die obersten 5 Karten des Decks eines Spielers an und lege die Karten in beliebiger Reihenfolge auf das Deck dieses Spielers zurück."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 277849,
		tcgplayer: 87686
	}
}

export default card
