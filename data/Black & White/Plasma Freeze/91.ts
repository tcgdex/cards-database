import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Hoothoot",
		fr: "Hoothoot",
		es: "Hoothoot",
		it: "Hoothoot",
		pt: "Hoothoot",
		de: "Hoothoot"
	},

	illustrator: "match",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		163,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Dual Draw",
				fr: "Pioche Mutuelle",
				de: "Doppelzug"
			},
			effect: {
				en: "Each player draws 2 cards.",
				fr: "Chaque joueur pioche 2 cartes.",
				de: "Jeder Spieler zieht 2 Karten."
			},

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

	description: {
		en: "It marks time precisely. Some countries consider it to be a wise friend, versed in the world's ways.",
		de: "Es sagt präzise die Uhrzeit an. In manchen Regionen verehrt man es zudem als weisen Freund."
	},

	thirdParty: {
		cardmarket: 280969,
		tcgplayer: 86175
	}
}

export default card
