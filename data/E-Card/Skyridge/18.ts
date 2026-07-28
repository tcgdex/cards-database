import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Magcargo",
		de: "Magcargo"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [219],

	hp: 80,

	types: [
		"Fighting"
	],

	evolveFrom: {
		en: "Slugma",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Streaming Mantle",
				de: "Fließende Umhüllung"
			},
			effect: {
				en: "When you play Magcargo from your hand to evolve your Active Pokémon, you may discard the top 3 cards of your deck and and then shuffle 3 basic Energy cards from your discard pile into your deck. If you do, your opponent does the same.",
				de: "Wenn du Magcargo aus deiner Hand spielst, um dein aktives Pokémon zu entwickeln, kannst du die obersten 3 Karten deines Decks auf deinen Ablagestapel legen und dann 3 Basis-Energiekarten aus deinem Ablagestapel in dein Deck mischen. Falls du dies tust, tut es dein Gegner ebenfalls."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Crushing Lava",
				de: "Erdrückende Lava"
			},
			effect: {
				en: "You may discard a Fire or Fighting basic Energy card attached to Magcargo. If you discard a Fire Energy card in this way, the Defending Pokémon is now Burned. If you discard a Fighting Energy card in this way, this attack does 40 damage plus 20 more damage.",
				de: "Du kannst eine an Magcargo angelegte - oder -Basis-Energiekarte auf deinen Ablagestapel legen. Legst du auf diese Weise eine -Energiekarte auf deinen Ablagestapel, ist das verteidigende Pokémon jetzt verbrannt. Legst du auf diese Weise eine -Energiekarte auf deinen Ablagestapel, fügt dieser Angriff 40 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 3,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 87011,
				cardmarket: 275276
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 87011,
				cardmarket: 275276
			},
		},
	],
}

export default card
