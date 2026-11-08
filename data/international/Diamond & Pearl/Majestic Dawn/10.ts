import { Card } from 'models/database/card'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		'en-us': "Moltres",
		'fr-fr': "Sulfura",
		'de-de': "Lavados"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		146,
	],

	hp: 100,

	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Flame Charge",
				'fr-fr': "Recharge enflammée",
				'de-de': "Flammen-Aufladung"
			},
			effect: {
				'en-us': "Once during your turn, when you put Moltres from your hand onto your Bench, you may flip a coin. If heads, search your discard pile for up to 3 Fire Energy cards and attach them to Moltres.",
				'fr-fr': "Une seule fois lors de votre tour, lorsque vous placez Sulfura de votre main sur votre Banc, vous pouvez lancer une pièce. Si c'est face, choisissez dans votre pile de défausse jusqu'à 3 cartes Énergie Fire et attachez-les à Sulfura.",
				'de-de': "Einmal während deines Zuges kannst du, wenn du Lavados von deiner Hand auf deine Bank legst, 1 Münze werfen. Bei \"Kopf\" durchsuche deinen Ablagestapel nach bis zu 3 -Energiekarten und lege sie an Lavados an."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Scorching Wing",
				'fr-fr': "Aile brûlante",
				'de-de': "Versengende Schwingen"
			},
			effect: {
				'en-us': "Discard all Fire Energy attached to Moltres.",
				'fr-fr': "Défaussez toutes les Énergies Fire attachées à Sulfura.",
				'de-de': "Lege alle an Lavados angelegten -Energien auf deinen Ablagestapel."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "One of the legendary bird Pokémon. It is said that its appearance indicates the coming of spring.",
	},

	thirdParty: {
		cardmarket: 278059,
		tcgplayer: 87561
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
