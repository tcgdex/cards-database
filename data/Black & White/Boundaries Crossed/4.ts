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
			},
			effect: {
				en: "Does 20 more damage for each Colorless in the Defending Pokémon's Retreat Cost.",
				fr: "Inflige 20 dégâts supplémentaires pour chaque Colorless dans le coût de Retraite du Pokémon Défenseur.",
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
			},
			effect: {
				en: "Flip 3 coins. This attack does 50 damage times the number of heads. This Pokémon is now Confused.",
				fr: "Lancez 3 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face. Ce Pokémon est maintenant Confus.",
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

	thirdParty: {
		cardmarket: 280591
	}
}

export default card
