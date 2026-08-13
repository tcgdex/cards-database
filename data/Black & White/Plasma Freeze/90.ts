import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Eevee",
		fr: "Évoli",
		es: "Eevee",
		it: "Eevee",
		pt: "Eevee",
		de: "Evoli"
	},

	illustrator: "Toyste Beach",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		133,
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
				en: "Signs of Evolution",
				fr: "Signes d'Évolution",
				de: "Spuren der Evolution"
			},
			effect: {
				en: "Search your deck for 3 Pokémon of different types that evolve from Eevee. Reveal them and put them into your hand. Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck 3 Pokémon de différents types qui sont une évolution d'Évoli. Montrez-les puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
				de: "Durchsuche dein Deck nach 3 vom Typ her unterschiedlichen Pokémon, die sich aus Evoli entwickeln. Zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bite",
				fr: "Morsure",
				de: "Biss"
			},

			damage: 30,

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
		en: "Thanks to its unstable genetic makeup, this special Pokémon conceals many different possible evolutions.",
		de: "Aufgrund einer genetischen Anomalie kann seine Entwicklung viele verschiedene Formen annehmen."
	},

	thirdParty: {
		cardmarket: 280967,
		tcgplayer: 85093
	}
}

export default card
