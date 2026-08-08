import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Magikarp",
		fr: "Magicarpe",
		de: "Karpador"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		129,
	],

	hp: 30,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Flop",
				fr: "Flop",
				de: "Plumps"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Rapid Evolution",
				fr: "Évolution rapide",
				de: "Rasche Evolution"
			},
			effect: {
				en: "Search your deck for an Evolution card named Gyarados or Dark Gyarados and put it on Magikarp. (This counts as evolving Magikarp.) Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck une carte Léviator ou Léviator obscur et placez-la sur Magicarpe. (Cela revient à faire évoluer Magicarpe). Mélangez ensuite votre deck.",
				de: "Durchsuche dein Deck nach einer Evolutionskarte mit dem Namen Garados oder Dunkles Garados und lege sie auf Karpador. (Dies zählt als eine Entwicklung für Karpador.) Mische dein Deck danach."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "Recent research has revealed the presence of dragon DNA in this species of Pokémon.",
		fr: "De récentes recherches ont démontré la présence d'ADN de dragon dans cette race de Pokémon.",
		de: "Neuere Forschung hat das Vorkommen von Drachen-DNS in dieser Pokémon-Art offenbart."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274100,
				tcgplayer: 87021
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274100,
				tcgplayer: 87021
			}
		}
	]
}

export default card
