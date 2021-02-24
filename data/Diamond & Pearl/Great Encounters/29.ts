import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Unown H",
		fr: "Zarbi H",
	},
	illustrator: "Daisuke Ito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		201,
	],
	hp: 60,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "HEAL",
				fr: "HEAL",
			},
			effect: {
				en: "Once during your turn (before your attack), if you have Unown H, Unown E, Unown A, and Unown L on your Bench, you may remove all Special Conditions from 1 of your Active Pokémon.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Zarbi H, Zarbi E, Zarbi A et Zarbi L se trouvent sur votre Banc, vous pouvez retirer à 1 de vos Pokémon Actifs tous ses États Spéciaux.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Hidden Power",
				fr: "Puissance cachée",
			},
			effect: {
				en: "Discard a card from your hand. (If you can't discard a card from your hand, this attack does nothing.)",
				fr: "Défaussez une carte de votre main. (Si vous ne pouvez pas défausser de carte de votre main, cette attaque est sans effet.)",
			},
			damage: 30,

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
