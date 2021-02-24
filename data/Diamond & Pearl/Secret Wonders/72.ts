import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Unown Z",
		fr: "Zarbi Z",
	},
	illustrator: "Kazuyuki Kano",
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
				en: "ZERO",
				fr: "ZÉRO",
			},
			effect: {
				en: "Once during your turn (before your attack), if Unown Z is on your Bench and you have no cards in your deck, you may discard all cards attached to Unown Z and put Unown Z on top of your deck.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Zarbi Z est sur votre Banc et qu'il ne vous reste plus de cartes dans votre deck, vous pouvez défausser toutes les cartes attachées à Zarbi Z et placer Zarbi Z au dessus de votre deck.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Hidden Power",
				fr: "Puissance cachée",
			},
			effect: {
				en: "Remove as many damage counters as you like from each Unown you have in play. Put that many damage counters on the Defending Pokémon.",
				fr: "Retirez à chacun des Zarbis que vous avez en jeu autant de marqueurs de dégât que vous voulez. Placez autant de marqueurs de dégât sur le Pokémon Défenseur.",
			},

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
