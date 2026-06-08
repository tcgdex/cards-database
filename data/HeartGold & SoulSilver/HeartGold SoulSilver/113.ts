import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Lugia LEGEND",
		fr: "Lugia LÉGENDAIRE",
		de: "Lugia LEGENDE"
	},

	illustrator: "Shinji Higuchi",
	rarity: "LEGEND",
	category: "Pokemon",
	set: Set,

	dexId: [
		249,
	],

	hp: 130,

	types: [
		"Water",
	],

	suffix: "Legend",
	stage: "Basic",
	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20",
		},
	],
	retreat: 0,

	description: {
		en: "It is said to be the guardian of the seas. It is rumored to have been seen on the night of a storm."
	},

	variants: [
		{
			type: "holo"
		}
	],

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Ocean Grow",
				fr: "Vaste océan",
			},
			effect: {
				en: "Once during your turn, when you put Lugia LEGEND into play, you may look at the top 5 cards of your deck and attach all Energy cards you find there to Lugia LEGEND. Discard the other cards.",
				fr: "Une seule fois pendant votre tour, lorsque vous mettez Lugia LÉGENDE en jeu, vous pouvez regarder les cinq cartes du dessus de votre deck et attacher les cartes Énergie figurant parmi ces cartes à Lugia LÉGENDE. Défaussez les autres cartes.",
			},
		},
	],

	attacks: [
		{
			name: {
				en: "Elemental Blast",
				de: "Urgewaltexplosion",
				fr: "Explosion élémentaire",
			},
			damage: 200,
			effect: {
				en: "Discard a Fire Energy, Water Energy, and Lightning Energy attached to Lugia LEGEND.",
				de: "Lege 1 -Energie, 1 -Energie und 1 -Energie, die an Lugia-LEGENDE angelegt sind, auf deinen Ablagestapel.",
				fr: "Défaussez une Énergie Feu, une Énergie Eau et une Énergie Électrique attachées à Lugia LÉGENDE.",
			},
			cost: [
				"Fire",
				"Water",
				"Lightning",
			],
		},
	],

	thirdParty: {
		cardmarket: 279085
	}
}

export default card
