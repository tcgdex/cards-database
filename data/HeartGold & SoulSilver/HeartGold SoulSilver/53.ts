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

	dexId: [121],

	hp: 90,

	types: [
		"Water"
	],

	evolveFrom: {
		en: "Staryu",
		fr: "Stari",
		de: "Sterndu"
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
				en: "Choose as many Water Energy attached to your Pokémon as you like. This attack does 20 damage times the number of Energy you chose. Shuffle those cards back into your deck.",
				fr: "Choisissez autant de cartes Énergie Water attachées à votre Pokémon que vous le souhaitez. Cette attaque inflige 20 dégâts multipliés par le nombre de cartes Énergie que vous avez choisies. Mélangez ces cartes dans votre deck.",
				de: "Wähle eine beliebige Anzahl {W}-Energien, die an 1 deiner Pokémon angelegt sind. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl der gewählten Energien zu. Mische die gewählten Karten anschließend in dein Deck."
			},
			damage: "20×",

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
		en: "The middle section of its body is called the core. It glows in a different color each time it is seen.",
		de: "Der Mittelteil seines Körpers wird Kern genannt. Bei jedem Hinsehen leuchtet er in einer anderen Farbe."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89536,
				cardmarket: 279025
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 89536,
				cardmarket: 279025
			}
		},
	],

}

export default card
