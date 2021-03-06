import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Banette",
		fr: "Branette",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		354,
	],
	hp: 80,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Shuppet",
		fr: "Polichombr",
	},
	stage: "Stage1",


	attacks: [
		{

			name: {
				en: "Ghost Head",
				fr: "Tête fantôme",
			},
			effect: {
				en: "Put as many damage counters as you like on Banette. (You can't put more than Banette's remaining HP.) Put that many damage counters on the Defending Pokémon.",
				fr: "Placez sur Branette autant de marqueurs de dégât que vous le voulez. (Vous ne pouvez pas placer plus de marqueurs qu'il ne reste de PV à Branette.) Placez autant de marqueurs de dégât sur le Pokémon Défenseur.",
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Spiteful Pain",
				fr: "Douleur malveillante",
			},
			effect: {
				en: "If Banette is in your discard pile, this attack does 40 damage plus 40 more damage. Then, search your discard pile for Banette, show it to your opponent, and shuffle it into your deck.",
				fr: "Si Branette se trouve dans votre pile de défausse, cette attaque inflige 40 dégât plus 40 dégât supplémentaires. Ensuite, cherchez Branette dans votre pile de défausse , montrez-le à votre adversaire et mélangez-le à votre deck.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
