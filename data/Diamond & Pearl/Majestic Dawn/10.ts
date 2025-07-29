import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Moltres",
		fr: "Sulfura",
		de: "Lavados"
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
				en: "Flame Charge",
				fr: "Recharge enflammée",
				de: "Flammen-Aufladung"
			},
			effect: {
				en: "Once during your turn, when you put Moltres from your hand onto your Bench, you may flip a coin. If heads, search your discard pile for up to 3 Fire Energy cards and attach them to Moltres.",
				fr: "Une seule fois lors de votre tour, lorsque vous placez Sulfura de votre main sur votre Banc, vous pouvez lancer une pièce. Si c'est face, choisissez dans votre pile de défausse jusqu'à 3 cartes Énergie Fire et attachez-les à Sulfura.",
				de: "Einmal während deines Zuges kannst du, wenn du Lavados von deiner Hand auf deine Bank legst, 1 Münze werfen. Bei \"Kopf\" durchsuche deinen Ablagestapel nach bis zu 3 -Energiekarten und lege sie an Lavados an."
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
				en: "Scorching Wing",
				fr: "Aile brûlante",
				de: "Versengende Schwingen"
			},
			effect: {
				en: "Discard all Fire Energy attached to Moltres.",
				fr: "Défaussez toutes les Énergies Fire attachées à Sulfura.",
				de: "Lege alle an Lavados angelegten -Energien auf deinen Ablagestapel."
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

	thirdParty: {
		cardmarket: 278059
	}
}

export default card
