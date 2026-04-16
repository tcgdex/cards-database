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
				fr: "Vaste océan",
			},
			effect: {
				fr: "Une seule fois pendant votre tour, lorsque vous mettez Lugia LÉGENDE en jeu, vous pouvez regarder les cinq cartes du dessus de votre deck et attacher les cartes Énergie figurant parmi ces cartes à Lugia LÉGENDE. Défaussez les autres cartes.",
			},
		},
	],

	attacks: [
		{
			name: {
				de: "Urgewaltexplosion",
				fr: "Explosion élémentaire",
			},
			damage: 200,
			effect: {
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
