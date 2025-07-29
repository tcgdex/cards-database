import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Tangela",
		fr: "Saquedeneu",
		de: "Tangela"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		114,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tickling Vines",
				fr: "Chatouillianes",
				de: "Kitzelnde Ranken"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon can't attack during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut pas attaquer pendant le prochain tour de votre adversaire.",
				de: "Wirf eine Münze. Bei \"Kopf\" kann das Verteidigende Pokémon während des nächsten Zuges deines Gegners nicht angreifen."
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Kick",
				fr: "Double pied",
				de: "Doppelkick"
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30x",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],

	thirdParty: {
		cardmarket: 275188
	}
}

export default card
