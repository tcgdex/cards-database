import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Typhlosion ex",
		'fr-fr': "Typhlosion ex",
		'de-de': "Tornupto ex"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [157],

	hp: 160,

	stage: "Stage2",
	types: [
		"Fire"
	],

	evolveFrom: {
		'en-us': "Quilava",
		'fr-fr': "Feurisson"
	},

	suffix: "ex",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Ring of Fire",
				'fr-fr': "Anneau de feu",
				'de-de': "Feuerring"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Burned, and can't retreat until the end of your opponent's next turn.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Brûlé et ne peut pas battre en retraite jusqu'à la fin du prochain tour de votre adversaire.",
				'de-de': "Das Verteidigende Pokémon is jetzt verbrannt und kann sich bis zum Ende des nächsten gegenerischen Zuges nicht zurückziehen."
			},
			damage: 40,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Split Blast",
				'fr-fr': "Exploser en deux",
				'de-de': "Geteilter Schuss"
			},
			effect: {
				'en-us': "Discard 1 Energy card attached to Typhlosion ex. If your opponent has more than 1 Defending Pokémon, you may do 50 damage to each of them instead.",
				'fr-fr': "Défaussez une carte Énergie attachée à Typhlosion ex. Si votre adversaire a plus d'un Pokémon Défenseur, vous pouvez infliger 50 dégâts à chacun.",
				'de-de': "Lege 1 an Tornupto ex angelegte Energiekarte auf deinen Ablagestapel. Falls dein gegner mehr als 1 Verteidigendes Pokémon hat, kannst du allen Verteidigenden Pokémon 50 Schadenspunkte zufühgen (anstelle des normalen Schadens dieses Angriffs)."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 2,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 90111,
				cardmarket: 275876
			}
		},
	]
}

export default card
