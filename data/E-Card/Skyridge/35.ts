import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Xatu",
		de: "Xatu"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		178,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Natu",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Synchronicity",
				de: "Synchronizität"
			},
			effect: {
				en: "You may attach any Technical Machine to Xatu.",
				de: "Du kannst beliebige technische Maschinen an Xatu anlegen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Warp Hole",
				de: "Verkrümmungsloch"
			},
			effect: {
				en: "Flip a coin. If heads, choose a card from your discard pile and put it on top of your deck.",
				de: "Wirf eine Münze. Wähle bei \"Kopf\" eine Karte aus deinem Ablagestapel und lege sie oben auf dein Deck."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275253,
		tcgplayer: 90659
	}
}

export default card
