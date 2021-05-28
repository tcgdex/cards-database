import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Lugia LEGEND",
		fr: "Lugia LÉGENDAIRE",
	},
	illustrator: "Shinji Higuchi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		249,
	],

	types: [
		"Water",
	],


	suffix: "Legend",
	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Ocean Grow",
				fr: "Vaste océan",
			},
			effect: {
				en: "Once during your turn, when you put Lugia LEGEND into play, you may look at the top 5 cards of your deck and attach all Energy cards you find there to Lugia LEGEND. Discard the other cards.",
				fr: "Une seule fois pendant votre tour, lorsque vous mettez Lugia LÉGENDAIRE en jeu, vous pouvez regarder les cinq cartes du dessus de votre deck et attacher les cartes Énergie figurant parmi ces cartes à Lugia LÉGENDAIRE. Défaussez-vous des autres cartes.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Water",
				"Lightning",
			],
			name: {
				en: "Elemental Blast",
				fr: "Explosion élémentaire",
			},
			effect: {
				en: "Discard a Fire Energy, Water Energy, and Lightning Energy attached to Lugia LEGEND.",
				fr: "Défaussez-vous d’une Énergie Fire, d’une Énergie Water et d’une Énergie Lightning attachées à Lugia LÉGENDAIRE.",
			},
			damage: 200,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
