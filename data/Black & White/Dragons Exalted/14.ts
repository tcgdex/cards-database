import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Roserade",
		fr: "Roserade",
		es: "Roserade",
		it: "Roserade",
		pt: "Roserade",
		de: "Roserade"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		407,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Roselia",
		fr: "Rosélia",
		de: "Roselia"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Crosswise Whip",
				fr: "Fouets Croisés",
				de: "Kreuzschlag"
			},
			effect: {
				en: "Flip 4 coins. This attack does 30 damage times the number of heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
				de: "Wirf 4 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poison Point",
				fr: "Point Poison",
				de: "Giftdorn"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Das Verteidigende Pokémon ist jetzt vergiftet."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "Each of its hands contains different toxins, but both hands can jab with near-fatal power.",
		de: "Es kann mit beiden Händen verheerend angreifen. Seine Hände enthalten unterschiedliche Gifte."
	},

	thirdParty: {
		cardmarket: 280453,
		tcgplayer: 88831
	}
}

export default card
