import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Haxorus",
		fr: "Tranchodon",
		es: "Haxorus",
		it: "Haxorus",
		pt: "Haxorus",
		de: "Maxax"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		612,
	],

	hp: 140,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Fraxure",
		fr: "Incisache",
		de: "Sharfax"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dual Chop",
				fr: "Double Baffe",
				de: "Doppelhieb"
			},
			effect: {
				en: "Flip 2 coins. This attack does 50 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 50 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: 50,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Giga Impact",
				fr: "Giga Impact",
				de: "Gigastoß"
			},
			effect: {
				en: "This Pokémon can't attack during your next turn.",
				fr: "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
				de: "Dieses Pokémon kann während deines nächsten Zuges nicht angreifen."
			},
			damage: 120,

		},
	],

	retreat: 2,

	description: {
		en: "They are kind but can be relentless when defending territory. They challenge foes with tusks that can cut steel.",
		de: "Hat eine eher sanfte Natur, doch bei Eindringlingen kennt es keine Gnade. Seine Stoßzähne durchbohren sogar Eisen."
	},

	thirdParty: {
		cardmarket: 280211,
		tcgplayer: 86032
	}
}

export default card
