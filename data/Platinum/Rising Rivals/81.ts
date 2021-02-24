import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Snorlax",
		fr: "Ronflex Niv. 40",
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		143,
	],
	hp: 100,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Bad Sleeping Habits",
				fr: "Mauvaises habitudes de dodo",
			},
			effect: {
				en: "As long as Snorlax is Asleep, your opponent's Active Pokémon can't retreat.",
				fr: "Tant que Ronflex est Endormi, le Pokémon Actif de votre adversaire ne peut pas battre en retraite.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Toss and Turn",
				fr: "Retournement",
			},
			effect: {
				en: "If Snorlax is Asleep, this attack does 20 damage plus 30 more damage. (This attack can be used even if Snorlax is Asleep.)",
				fr: "Si Ronflex est Endormi, cette attaque inflige 20 dégâts plus 30 dégâts supplémentaires. (Cette attaque peut être utilisée même si Ronflex est Endormi.)",
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heavy Press",
				fr: "Lourde pression",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 40 damage plus 40 more damage. If tails, Snorlax is now Asleep.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts plus 40 dégâts supplémentaires. Si c'est pile, Ronflex est maintenant Endormi.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "+20"
		},
	],

	retreat: 4,



}

export default card
