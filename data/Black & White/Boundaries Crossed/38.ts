import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Delibird",
		fr: "Cadoizo",
		es: "Delibird",
		it: "Delibird",
		pt: "Delibird",
		de: "Botogel"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		225,
	],

	hp: 80,

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
				en: "Present",
				fr: "Cadeau",
				de: "Geschenk"
			},
			effect: {
				en: "Flip a coin. If heads, search your deck for a card and put it into your hand. Shuffle your deck afterward.",
				fr: "Lancez une pièce. Si c'est face, cherchez une carte dans votre deck puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
				de: "Wirf 1 Münze. Durchsuche bei „Kopf“ dein Deck nach 1 Karte und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Icy Wind",
				fr: "Vent Glace",
				de: "Eissturm"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "Das Verteidigende Pokémon schläft jetzt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "It carries food all day long. When someone is lost in the mountains, it shares that food.",
		de: "Es trägt den ganzen Tag Essen mit sich herum, das es mit Menschen teilt, die in den Bergen feststecken."
	},

	thirdParty: {
		cardmarket: 280625,
		tcgplayer: 84751
	}
}

export default card
