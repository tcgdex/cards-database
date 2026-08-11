import { Card } from 'models/database/card'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		'en-us': "Pachirisu",
		'fr-fr': "Pachirisu",
		'de-de': "Pachirisu"
	},

	illustrator: "Noriko Hotta",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [417],

	hp: 60,

	types: [
		"Lightning"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Self-Generation",
				'fr-fr': "Auto-génération",
				'de-de': "Eigengenerator"
			},
			effect: {
				'en-us': "Once during your turn, when you put Pachirisu from your hand onto your Bench, you may attach up to 2 Lightning Energy cards from your hand to Pachirisu.",
				'fr-fr': "Une seule fois pendant votre tour, lorsque vous placez Pachirisu de votre main sur votre Banc, vous pouvez lui attacher 2 cartes Énergie Lightning.",
				'de-de': "Einmal während deines Zuges kannst du, wenn du Pachirisu von deiner Hand auf deine Bank legst, bis zu 2 -Energiekarten von deiner Hand an Pachirisu anlegen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				'en-us': "Shocking Bolt",
				'fr-fr': "Éclair neutralisant",
				'de-de': "Schockbolzen"
			},
			effect: {
				'en-us': "Put all Energy cards attached to Pachirisu in the Lost Zone.",
				'fr-fr': "Placez toutes les cartes Énergie attachées à Pachirisu dans la Zone Perdue.",
				'de-de': "Lege alle an Pachirisu angelegten Energiekarten ins Nirgendwo."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,

	description: {
		'en-us': "It's one of the kinds of Pokémon with electric cheek pouches. It shoots charges from its tail.",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 87904,
				cardmarket: 279661
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87904,
				cardmarket: 279661
			},
		},
	],

}

export default card
