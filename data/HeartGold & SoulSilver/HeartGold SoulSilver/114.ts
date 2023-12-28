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
				de: "Meereswachstum"
			},
			effect: {
				en: "Once during your turn, when you put Lugia LEGEND into play, you may look at the top 5 cards of your deck and attach all Energy cards you find there to Lugia LEGEND. Discard the other cards.",
				fr: "Une seule fois pendant votre tour, lorsque vous mettez Lugia LÉGENDAIRE en jeu, vous pouvez regarder les cinq cartes du dessus de votre deck et attacher les cartes Énergie figurant parmi ces cartes à Lugia LÉGENDAIRE. Défaussez-vous des autres cartes.",
				de: "Einmal während deines Zuges, wenn du Lugia-LEGENDE von deiner Hand ins Spiel bringst, kannst du dir die obersten 5 Karten deines Decks anschauen und alle dabei gefundenen Energiekarten an Lugia-LEGENDE anlegen. Lege die anderen Karten auf deinen Ablagestapel."
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
				de: "Urgewaltexplosion"
			},
			effect: {
				en: "Discard a Fire Energy, Water Energy, and Lightning Energy attached to Lugia LEGEND.",
				fr: "Défaussez-vous d’une Énergie Fire, d’une Énergie Water et d’une Énergie Lightning attachées à Lugia LÉGENDAIRE.",
				de: "Lege 1 -Energie, 1 -Energie und 1 -Energie, die an Lugia-LEGENDE angelegt sind, auf deinen Ablagestapel."
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
	stage: "Basic",

	description: {
		en: "It is said to be the guardian of the seas. It is rumored to have been seen on the night of a storm."
	},

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	hp: 130
}

export default card
