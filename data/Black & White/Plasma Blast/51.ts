import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Throh",
		fr: "Judokrak",
		es: "Throh",
		it: "Throh",
		pt: "Throh",
		de: "Jiutesto"
	},

	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	cameoDexIds: [539],

	dexId: [
		538,
	],

	hp: 100,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Freestyle Strike",
				fr: "Randori",
				de: "Freistilschlag"
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Shoulder Throw",
				fr: "Projection Martiale",
				de: "Schulterwurf"
			},
			effect: {
				en: "Does 80 damage minus 20 damage for each Colorless in the Defending Pokémon's Retreat Cost.",
				fr: "Inflige 80 dégâts moins 20 dégâts pour chaque Colorless dans le coût de Retraite du Pokémon Défenseur.",
				de: "Dieser Angriff fügt 80 Schadenspunkte minus 20 Schadenspunkte für jedes {C}-Symbol in den Rückzugskosten des Verteidigenden Pokémon zu."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		en: "When it encounters a foe bigger than itself, it wants to throw it. It changes belts as it gets stronger.",
		de: "Trifft es jemanden, der größer ist als es selbst, will es ihn unbedingt werfen. Wird es stärker, wechselt es den Gürtel."
	},

	thirdParty: {
		cardmarket: 281072,
		tcgplayer: 89902
	}
}

export default card
