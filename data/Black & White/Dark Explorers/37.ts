import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Jolteon",
		fr: "Voltali",
		es: "Jolteon",
		it: "Jolteon",
		pt: "Jolteon",
		de: "Blitza"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		135,
	],

	hp: 90,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
		de: "Evoli"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Electrigun",
				fr: "Pistolectrique",
				de: "Elektroknarre"
			},
			effect: {
				en: "You may discard a Lightning Energy attached to this Pokémon. If you do, this attack does 40 more damage.",
				fr: "Vous pouvez défausser une Énergie  attachée à ce Pokémon. Dans ce cas, cette attaque inflige 40 dégâts supplémentaires.",
				de: "Du kannst 1 an dieses Pokémon angelegte {L}-Energie auf deinen Ablagestapel legen. Wenn du das machst, fügt dieser Angriff 40 weitere Schadenspunkte zu."
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pin Missile",
				fr: "Dard-Nuée",
				de: "Nadelrakete"
			},
			effect: {
				en: "Flip 4 coins. This attack does 40 damage times the number of heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face.",
				de: "Wirf 4 Münzen. Dieser Angriff fügt 40 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 0,

	description: {
		en: "If agitated, it uses electricity to straighten out its fur and launch it in small bunches.",
		de: "Bringt man es aus der Ruhe, verwendet es Elektrizität, um kleine Knäuel seines Fells abzufeuern."
	},

	thirdParty: {
		cardmarket: 280365,
		tcgplayer: 86347
	}
}

export default card
