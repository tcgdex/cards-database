import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Aipom",
		fr: "Capumain",
		de: "Griffel"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		190,
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
				en: "Imitate",
				fr: "Imiter",
				de: "Nachäffen"
			},
			effect: {
				en: "Draw cards until you have the same number of cards in your hand as your opponent.",
				fr: "Piochez jusqu’à ce que vous obteniez le même nombre de cartes dans votre main que votre adversaire.",
				de: "Ziehe so viele Karten, bis du die gleiche Anzahl Handkarten hast wie dein Gegner."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tail Punch",
				fr: "Kogn’Keu",
				de: "Schwanzhieb"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "Its tail is so powerful that it can use it to grab a tree branch and hold itself up in the air."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279585
	}
}

export default card
