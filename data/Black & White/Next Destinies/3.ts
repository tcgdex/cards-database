import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Kricketot",
		fr: "Crikzik",
		es: "Kricketot",
		it: "Kricketot",
		pt: "Kricketot",
		de: "Zirpurze"
	},

	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		401,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Beat",
				fr: "Bataille",
				de: "Verprügler"
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Double Headbutt",
				fr: "Double Coup d'Boule",
				de: "Doppelte Kopfnuss"
			},
			effect: {
				en: "Flip 2 coins. This attack does 10 more damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts supplémentaires pour chaque côté face.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 10 weitere Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "Its legs are short. Whenever it stumbles, its stiff antennae clack with a xylophone-like sound.",
		de: "Seine Beine sind kurz. Stolpert es, klappern seine starren Antennen und klingen wie ein Xylophon."
	},

	thirdParty: {
		cardmarket: 280228,
		tcgplayer: 86531
	}
}

export default card
