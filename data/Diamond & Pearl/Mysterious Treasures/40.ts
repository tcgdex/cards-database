import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Whiscash",
		fr: "Barbicha",
		de: "Welsar"
	},

	illustrator: "Daisuke Ito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		340,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Barboach",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fury",
				fr: "Furieux",
				de: "Tobsucht"
			},
			effect: {
				en: "Does 20 damage times the number of damage counters on Whiscash.",
				fr: "Inflige 20 dégâts multipliés par le nombre de marqueurs de dégât sur Barbicha.",
				de: "Dieser Angriff fügt 20 Schadenspunkte für jede Schadensmarke auf Welsar zu."
			},
			damage: "20x",

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Magnitude",
				fr: "Ampleur",
				de: "Intensität"
			},
			effect: {
				en: "Does 20 damage to each Benched Pokémon (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 20 dégâts à chaque Pokémon de Banc (les vôtres et ceux de votre adversaire). (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
				de: "Dieser Angriff fügt jedem Pokémon auf der Bank (deinen und denen deines Gegners) 20 Schadenspunkte zu. (Wende Schwäche und Resistenz für Pokémon auf der Bank nicht an.)"
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	description: {
		fr: "Il est attaché à son territoire. Il repousse l'ennemi en provoquant des secousses qui portent à 5 Km."
	},

	thirdParty: {
		cardmarket: 277669
	}
}

export default card
