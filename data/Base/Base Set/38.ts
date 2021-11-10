import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Poliwhirl",
		fr: "Têtarte"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		61,
	],

	hp: 60,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Poliwag",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Amnesia",
				fr: "Amnésie"
			},
			effect: {
				en: "Choose 1 of defenders attacks. Defender cannot use that attack next turn.",
				fr: "Choisissez 1 des attaques du Pokémon Défenseur. Ce Pokémon ne peut pas utiliser cette attaque pendant le prochain tour de votre adversaire."
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Doubleslap",
				fr: "Torgnoles"
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 damage times number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	description: {
		fr: "Amphibie, il peut vivre à l'air libre mais il doit rester mouillé pour survivre."
	}
}

export default card
