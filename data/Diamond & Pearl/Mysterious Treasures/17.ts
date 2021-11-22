import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Tyranitar",
		fr: "Tyranocif"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		248,
	],

	hp: 140,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Pupitar",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Payback",
				fr: "Représailles"
			},
			effect: {
				en: "If your opponent has only 1 Prize card left, this attack does 40 damage plus 40 more damage and discard the top 3 cards from your opponent's deck.",
				fr: "S'il ne reste à votre adversaire qu'1 carte Récompense, cette attaque inflige 40 dégâts plus 40 dégâts supplémentaires et défausse les 3 cartes du dessus du deck de votre adversaire."
			},
			damage: "40+",

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Ground Burn",
				fr: "Brûlure au sol"
			},
			effect: {
				en: "Each player discards the top card of his or her deck. This attack does 80 damage plus 20 more damage for each Energy card discarded in this way.",
				fr: "Chaque joueur défausse la carte du dessus de son deck. Cette attaque inflige 80 dégâts plus 20 dégâts supplémentaires pour chaque Carte Énergie défaussée de cette façon."
			},
			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	description: {
		fr: "Lorsqu'il est en colère, il abat des montagnes et enterre des fleuves. On doit alors modifier les cartes."
	}
}

export default card
