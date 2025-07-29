import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Miltank",
		fr: "Écrémeuh",
		de: "Miltank"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		241,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Healing Milk",
				fr: "Lait guérisseur",
				de: "Heilende Milch"
			},
			effect: {
				en: "Flip 2 coins. For each heads, remove 3 damage counters from 1 of your Pokémon.",
				fr: "Lancez 2 pièces. Pour chaque face, retirez à 1 de vos Pokémon 3 marqueurs de dégât.",
				de: "Wirf 2 Münzen. Entferne jedes Mal, wenn die Münze \"Kopf\" gezeigt hat, 3 Schadensmarken von 1 deiner Pokémon"
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Continuous Tumble",
				fr: "Roulage continue",
				de: "Dauerrollen"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 20 damage times the number of heads.",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				de: "Wirf so lange 1 Münze, bis zum ersten Mal das Ergebnis \"Zahl\" kommt. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20x",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 277808
	}
}

export default card
