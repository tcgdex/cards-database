import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Rotom",
		fr: "Motisma",
		de: "Rotom"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		479,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Discharge",
				fr: "Coup d'Jus",
				de: "Ladungsstoß"
			},
			effect: {
				en: "Discard all Lightning Energy attached to Rotom. Flip a coin for each Energy card you discarded. This attack does 40 damage times the number of heads.",
				fr: "Défaussez toutes les Énergies Lightning attachées à Motisma. Lancez une pièce pour chaque carte Énergie défaussée. Cette attaque inflige 40 dégâts multipliés par le nombre de faces.",
				de: "Entferne alle -Energien von Rotom und lege sie auf deinen Ablagestapel. Wirf für jede auf diese Weise auf deinen Ablagestapel gelegte Energiekarte 1 Münze. Dieser Angriff fügt 40 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "40x",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Uproar",
				fr: "Brouhaha",
				de: "Aufruhr"
			},
			effect: {
				en: "This attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Dieser Angriff fügt jedem Pokémon deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278773
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	]
}

export default card
