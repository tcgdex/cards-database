import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Galvantula",
		fr: "Mygavolt",
		es: "Galvantula",
		it: "Galvantula",
		pt: "Galvantula",
		de: "Voltula"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		596,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Joltik",
		fr: "Statitik",
		de: "Wattzapf"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Quick Turn",
				fr: "Vif Retournement",
				de: "Schnelldrehung"
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Electrisilk",
				fr: "Électrisoie",
				de: "Elektrofaden"
			},
			effect: {
				en: "If the Defending Pokémon has no Retreat Cost, this attack does 40 more damage.",
				fr: "Si le Pokémon Défenseur n'a pas de coût de Retraite, cette attaque inflige 40 dégâts supplémentaires.",
				de: "Wenn das Verteidigende Pokémon keine Rückzugskosten hat, fügt dieser Angriff 40 weitere Schadenspunkte zu."
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
		en: "They employ an electrically charged web to trap their prey. While it is immobilized by shock, they leisurely consume it.",
		de: "Lässt seine Beute in elektrisch geladene Fäden tappen. Solang diese durch den Schock gelähmt ist, labt es sich an ihr."
	},

	thirdParty: {
		cardmarket: 280371,
		tcgplayer: 85612
	}
}

export default card
