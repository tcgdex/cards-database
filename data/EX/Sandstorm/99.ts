import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Typhlosion ex",
		fr: "Typhlosion ex",
		de: "Tornupto ex"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		157,
	],

	hp: 160,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Quilava",
		fr: "Feurisson"
	},

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ring of Fire",
				fr: "Anneau de feu",
				de: "Feuerring"
			},
			effect: {
				en: "The Defending Pokémon is now Burned, and can't retreat until the end of your opponent's next turn.",
				fr: "Le Pokémon Défenseur est maintenant Brûlé et ne peut pas battre en retraite jusqu'à la fin du prochain tour de votre adversaire.",
				de: "Das Verteidigende Pokémon is jetzt verbrannt und kann sich bis zum Ende des nächsten gegenerischen Zuges nicht zurückziehen."
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
				en: "Split Blast",
				fr: "Exploser en deux",
				de: "Geteilter Schuss"
			},
			effect: {
				en: "Discard 1 Energy card attached to Typhlosion ex. If your opponent has more than 1 Defending Pokémon, you may do 50 damage to each of them instead.",
				fr: "Défaussez une carte Énergie attachée à Typhlosion ex. Si votre adversaire a plus d'un Pokémon Défenseur, vous pouvez infliger 50 dégâts à chacun.",
				de: "Lege 1 an Tornupto ex angelegte Energiekarte auf deinen Ablagestapel. Falls dein gegner mehr als 1 Verteidigendes Pokémon hat, kannst du allen Verteidigenden Pokémon 50 Schadenspunkte zufühgen (anstelle des normalen Schadens dieses Angriffs)."
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

	thirdParty: {
		cardmarket: 275876,
		tcgplayer: 90111
	},

	variants: [
		{
			type: "holo",
		},
	]
}

export default card
