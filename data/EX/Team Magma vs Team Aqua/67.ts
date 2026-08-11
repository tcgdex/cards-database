import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Magma's Rhyhorn",
		fr: "Rhinocorne de Team Magma",
		de: "Team Magmas Rihorn"
	},

	illustrator: "Yosuke Da Silva",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [111],

	hp: 50,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Double Stab",
				fr: "Coup double",
				de: "Doppelstich"
			},
			effect: {
				en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: "10×",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Second Strike",
				fr: "Deuxième coup",
				de: "Sekundärschlag"
			},
			effect: {
				en: "If the Defending Pokémon already has at least 2 damage counters on it, this attack does 10 damage plus 20 more damage.",
				fr: "Si le Pokémon Défenseur possède déjà 2 marqueurs de dégât, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires.",
				de: "Wenn bereits 2 oder mehr Schadensmarken auf dem Verteidigenden Pokémon liegen, fügt dieser Angriff 10 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275844,
				tcgplayer: 89843
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275844,
				tcgplayer: 89843
			}
		},
	],

}

export default card
