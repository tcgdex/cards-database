import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Golem",
		fr: "Grolem",
		de: "Geowaz"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		76,
	],

	hp: 120,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Graveler",
		fr: "Gravalanch"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Mend",
				fr: "Réparation",
				de: "Reparieren"
			},
			effect: {
				en: "Search your discard pile for a Fighting Energy card and attach it to Golem. If you do, remove 2 damage counters from Golem.",
				fr: "Cherchez dans votre pile de défausse une carte Énergie  et attachez-la à Grolem. Retirez-lui alors 2 marqueurs de dégât.",
				de: "Durchsuche deinen Ablagestapel nach einer -Energiekarte und lege sie an Geowaz an. Wenn du das machst, entferne 2 Schadensmarken von Geowaz."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Enraged Linear Attack",
				fr: "Attaque linéaire enragée",
				de: "Wütender Linearer Angriff"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 10 damage for each damage counter on Golem to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 10 dégâts pour chaque marqueur de dégât sur Grolem. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 10 Schadenspunkte für jede Schadensmarke auf Geowaz zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an)."
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rock Tumble",
				fr: "Roule-pierre",
				de: "Rollende Felsen"
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				de: "Resistenz hat keine Auswirkungen auf die Schadenspunkte dieses Angriffs."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 3,

	thirdParty: {
		cardmarket: 276883,
		tcgplayer: 85827
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "holo",
			stamp: ["regional-championships"]
		}
	]
}

export default card
