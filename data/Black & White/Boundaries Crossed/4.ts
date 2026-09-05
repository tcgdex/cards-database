import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Bellossom",
		fr: "Joliflor",
		es: "Bellossom",
		it: "Bellossom",
		pt: "Bellossom",
		de: "Blubella"
	},

	illustrator: "Mizue",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		182,
	],

	hp: 110,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Gloom",
		fr: "Ortide",
		de: "Duflor"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Grass Knot",
				fr: "Nœud Herbe",
				de: "Strauchler"
			},
			effect: {
				en: "Does 20 more damage for each Colorless in the Defending Pokémon's Retreat Cost.",
				fr: "Inflige 20 dégâts supplémentaires pour chaque Colorless dans le coût de Retraite du Pokémon Défenseur.",
				de: "Dieser Angriff fügt 20 weitere Schadenspunkte für jedes {C}-Symbol in den Rückzugskosten des Verteidigenden Pokémon zu."
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Petal Dance",
				fr: "Danse-Fleur",
				de: "Blättertanz"
			},
			effect: {
				en: "Flip 3 coins. This attack does 50 damage times the number of heads. This Pokémon is now Confused.",
				fr: "Lancez 3 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face. Ce Pokémon est maintenant Confus.",
				de: "Wirf 3 Münzen. Dieser Angriff fügt 50 Schadenspunkte mal der Anzahl „Kopf“ zu. Dieses Pokémon ist jetzt verwirrt."
			},
			damage: 50,

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
		en: "When the heavy rainfall season ends, it is drawn out by warm sunlight to dance in the open.",
		de: "Sobald die Regenzeit vorbei ist, wird es von der warmen Sonne nach draußen gezogen, wo es tanzt."
	},

	thirdParty: {
		cardmarket: 280591,
		tcgplayer: 83802
	}
}

export default card
