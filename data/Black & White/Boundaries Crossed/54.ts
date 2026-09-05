import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Electivire",
		fr: "Élekable",
		es: "Electivire",
		it: "Electivire",
		pt: "Electivire",
		de: "Elevoltek"
	},

	illustrator: "BERUBURI",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		466,
	],

	hp: 120,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Electabuzz",
		fr: "Élektek",
		de: "Elektek"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Electriwave",
				fr: "Vague Électrique",
				de: "Elektrowelle"
			},
			effect: {
				en: "This attack does 30 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 30 dégâts à chacun des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				de: "Dieser Angriff fügt jedem Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Shock Wave",
				fr: "Onde de Choc",
				de: "Schockwelle"
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				de: "Der Schaden dieses Angriffs wird durch Resistenz nicht verändert."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		en: "The instant it presses the tips of its tails onto an opponent, it sends over 20,000 volts of electricity into the foe.",
		de: "Es berührt Gegner mit seinen beiden Schweifspitzen und entlädt dabei geballte 20 000 Volt."
	},

	thirdParty: {
		cardmarket: 280641,
		tcgplayer: 85124
	}
}

export default card
