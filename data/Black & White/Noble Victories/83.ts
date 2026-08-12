import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Durant",
		fr: "Fermite",
		es: "Durant",
		it: "Durant",
		pt: "Durant",
		de: "Fermicula"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		632,
	],

	hp: 70,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Devour",
				fr: "Voracité",
				de: "Verschlinger"
			},
			effect: {
				en: "For each of your Durant in play, discard the top card of your opponent's deck.",
				fr: "Pour chacun de vos Fermite en jeu, défaussez la carte du dessus du deck de votre adversaire.",
				de: "Lege für jedes deiner Fermicula im Spiel die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Vice Grip",
				fr: "Force Poigne",
				de: "Klammer"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "They attack in groups, covering themselves in steel armor to protect themselves against Heatmor.",
		de: "Ein eiserner Panzer umgibt seinen Leib. Angriffe von Furnifraß, seinem Feind, schlägt es in der Gruppe zurück."
	},

	thirdParty: {
		cardmarket: 280206,
		tcgplayer: 85020
	}
}

export default card
