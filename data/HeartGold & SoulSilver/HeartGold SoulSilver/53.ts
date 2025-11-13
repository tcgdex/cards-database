import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Starmie",
		fr: "Staross",
		de: "Starmie"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		121,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Staryu",
		fr: "Stari",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Cosmic Cyclone",
				fr: "Cyclone cosmique",
				de: "Kosmischer Wirbelsturm"
			},
			effect: {
				en: "Choose as many Water Energy attached to your Pokémon as you like. This attack does 20 damage times the amount of Energy you chose. Shuffle those cards back into your deck.",
				fr: "Choisissez autant de cartes Énergie Water attachées à votre Pokémon que vous le souhaitez. Cette attaque inflige 20 dégâts multipliés par le nombre de cartes Énergie que vous avez choisies. Mélangez ces cartes dans votre deck.",
				de: "Wähle eine beliebige Anzahl -Energien, die an 1 deiner Pokémon angelegt sind. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl der gewählten Energie zu. Mische die gewählten Karten anschließend in dein Deck."
			},
			damage: "20x",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 0,

	description: {
		en: "The middle section of its body is called the core. It glows in a different color each time it is seen."
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		cardmarket: 279025,
		tcgplayer: 89536
	}
}

export default card
