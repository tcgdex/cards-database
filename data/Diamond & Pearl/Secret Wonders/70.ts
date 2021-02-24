import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Unown O",
		fr: "Zarbi O",
	},
	illustrator: "Daisuke Ito",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		201,
	],
	hp: 50,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "ONE",
				fr: "One",
			},
			effect: {
				en: "Once during your turn (before your attack), if you have Unown O, Unown N, and Unown E on your Bench and you have 1 card left in your hand, you may draw cards until you have 7 cards in your hand.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Zarbi O, Zarbi N et Zarbi E sont sur votre Banc et qu'il vous reste 1 carte en main, vous pouvez piocher des cartes jusqu'à ce que vous ayez 7 cartes en main.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Hidden Power",
				fr: "Puissance cachée",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	retreat: 1,



}

export default card
