import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Unown [O]",
		fr: "Zarbi O",
		de: "Icognito O"
	},

	illustrator: "CR CG gangs",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		201,
	],

	hp: 40,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Observe",
				fr: "[Observe]",
				de: "Observe"
			},
			effect: {
				en: "Once during your turn (before you attack), you may look at 5 cards from the top of your opponent's deck and put them back in the same order.",
				fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez regarder les 5 premières cartes du deck de votre adversaire et les replacer dans le même ordre.",
				de: "Du kannst dir einmal während deines Zuges (vor deinem Angriff) die obersten fünf Karten des decks deines Gegners anschauen. lege die karten in derselben Reihenfolge zurück."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Hidden Power",
				fr: "Puissance cachée",
				de: "Kraftreserve"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "Ils ressemblent à des hiéroglyphes inscrits sur d'antiques tablettes. On prétend qu'ils sont de la même origine."
	},

	thirdParty: {
		cardmarket: 274580,
		tcgplayer: 90225
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card

