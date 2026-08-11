import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Magneton",
		'de-de': "Magneton"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [82],

	hp: 80,

	types: [
		"Lightning"
	],

	evolveFrom: {
		'en-us': "Magnemite",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Attract Energy",
				'de-de': "Energie-Anlockung"
			},
			effect: {
				'en-us': "When you play Magneton from your hand to evolve 1 of your Pokémon, you may move any number of basic Energy cards attached to your other Pokémon to Magneton.",
				'de-de': "Wenn du Magneton aus deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du eine beliebige Anzahl an Basis-Energiekarten, die an deine anderen Pokémon angelegt sind, an Magneton anlegen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Electric Blast",
				'de-de': "Elektrischer Strahl"
			},
			effect: {
				'en-us': "You may discard all Lightning Energy cards attached to Magneton when you use this attack. If you do, put damage counters equal to the amount of Energy cards removed in this way on any number of your opponent's Benched Pokémon in the way you like. (For example, if you discard 3 Lightning Energy cards, you can put 1 damage counter on 1 of your opponent's Benched Pokémon and 2 on another.)",
				'de-de': "Du kannst alle an Magneton angelegten -Energiekarten auf deinen Ablagestapel legen, wenn du diesen Angriff verwendest. Falls du dies tust, verteile so viele Schadensmarken, wie du auf diese Weise Energiekarten abgelegt hast, in beliebiger Weise auf eine beliebige Anzahl an Pokémon auf der Bank deines Gegners. (Legst du zum Beispiel 3 -Energiekarten auf den Ablagestapel, kannst du 1 Schadensmarke auf eins der Pokémon auf der Bank deines Gegners und 2 Marken auf ein anderes legen.)"
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 87089,
				cardmarket: 275228
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 87089,
				cardmarket: 275228
			},
		},
	],
}

export default card
