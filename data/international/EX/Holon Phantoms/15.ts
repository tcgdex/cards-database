import { Card } from 'models/database/card'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		'en-us': "Raichu δ",
		'fr-fr': "Raichu δ",
		'de-de': "Raichu"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		26,
	],

	hp: 70,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Zzzap",
				'fr-fr': "Zzzap",
				'de-de': "Zzzapp!"
			},
			effect: {
				'en-us': "Does 20 damage to each Pokémon that has any Poké-Powers or Poké-Bodies (both yours and your opponent's). Don't apply Weakness or Resistance.",
				'fr-fr': "Inflige 20 dégâts à chaque Pokémon possédant des Poké-Powers ou des Poké-Bodies (les vôtres et ceux de votre adversaire). Vous ne pouvez pas appliquer la Faiblesse ou la Résistance.",
				'de-de': "Dieser Angriff fügt jedem Pokémon im Spiel, das Poké-Power oder Poké-Body hat, 20 Schadenspunkte zu (deinen und den gegnerischen). Wende Schwäche und Resistenz nicht an."
			},

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Metallic Thunder",
				'fr-fr': "Tonnerre métallique",
				'de-de': "Metallischer Donner"
			},
			effect: {
				'en-us': "You may discard 2 Metal Energy attached to Raichu. If you do, this attack's base damage is 90 instead of 50.",
				'fr-fr': "Vous pouvez défausser 2 Énergies  attachées à Raichu. Les dégâts de base de cette attaque sont alors de 90 au lieu de 50.",
				'de-de': "Du kannst 2 -Energien, die an Raichu angelegt sind, auf deinen Ablagestapel legen. Wenn du das machst, beträgt der Grundschaden dieses Angriffs 90 Schadenspunkte anstelle von 50 Schadenspunkten."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 0,

	thirdParty: {
		cardmarket: 276985
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		},
	]
}

export default card
