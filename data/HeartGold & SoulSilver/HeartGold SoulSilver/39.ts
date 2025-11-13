import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Delibird",
		fr: "Cadoizo",
		de: "Botogel"
	},

	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		225,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Snowy Present",
				fr: "Cadeau enneigé",
				de: "Schneepräsent"
			},
			effect: {
				en: "Draw a card for each Water Energy attached to all of your Pokémon.",
				fr: "Piochez une carte pour chaque carte Énergie Water attachée à l’ensemble de vos Pokémon.",
				de: "Ziehe eine Karte für jede -Energie, die an allen deinen Pokémon angelegt ist."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Hail",
				fr: "Grêle",
				de: "Hagelsturm"
			},
			effect: {
				en: "This attack does 10 damage to each of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon du Banc.)",
				de: "Dieser Angriff fügt jedem Pokémon deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "It nests at the edge of sharp cliffs. It spends all day carrying food to its awaiting chicks."
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
		},
		{
			type: "reverse",
			foil: "league"
		},
		{
			type: "normal",
			stamp : ["snowflake"],
			languages: ["de"]
		},
	],

	thirdParty: {
		cardmarket: 279011,
		tcgplayer: 84750
	}
}

export default card
