import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Krabby",
		fr: "Krabby",
		de: "Krabby"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		98,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Call for Family",
				fr: "Appel à la famille",
				de: "Familienruf"
			},
			effect: {
				en: "Search your deck for a Basic Pokémon named Krabby and put it onto your Bench. Shuffle your deck afterward. (You can't use this attack if your Bench is full.)",
				fr: "Cherchez dans votre deck un Pokémon de base appelé Krabby et placez-le sur votre Banc. Mélangez ensuite votre deck. (Vous ne pouvez pas utiliser cette attaque si votre Banc est plein.)",
				de: "Suche in deinem deck nach einer Basis-Pokémon-Karte mit dme namen Krabby und lege sie auf deine bank. Mische dein Deck danach. (Du kannst diesen Angriff nicht einsetzen, wenn deine bank voll ist.)"
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Irongrip",
				fr: "Poigne de fer",
				de: "Eiserner Griff"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	description: {
		fr: "Ses pinces ne sont pas seulenent de puissante armes, elles lui servent à conserver son équilibre quand il narche de travers."
	},

	thirdParty: {
		cardmarket: 273912,
		tcgplayer: 44453
	},

	variants: [
		{
			type: "normal",
			foil: "galaxy"
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			foil: "galaxy"
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright"
		}
	]
}

export default card
