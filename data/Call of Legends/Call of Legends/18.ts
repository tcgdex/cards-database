import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Pachirisu",
		fr: "Pachirisu",
	},
	illustrator: "Noriko Hotta",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		417,
	],
	hp: 60,
	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Self-Generation",
				fr: "Auto-génération",
			},
			effect: {
				en: "Once during your turn, when you put Pachirisu from your hand onto your Bench, you may attach up to 2 Lightning Energy cards from your hand to Pachirisu.",
				fr: "Une seule fois pendant votre tour, lorsque vous placez Pachirisu de votre main sur votre Banc, vous pouvez lui attacher 2 cartes Énergie Lightning.",
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
				en: "Shocking Bolt",
				fr: "Éclair neutralisant",
			},
			effect: {
				en: "Put all Energy cards attached to Pachirisu in the Lost Zone.",
				fr: "Placez toutes les cartes Énergie attachées à Pachirisu dans la Zone Perdue.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
