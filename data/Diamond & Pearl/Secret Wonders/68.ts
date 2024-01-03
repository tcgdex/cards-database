import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Unown K",
		fr: "Zarbi K",
		de: "Icognito K"
	},
	illustrator: "Daisuke Ito",
	rarity: "Uncommon",
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
				en: "KIND",
				fr: "KATÉGORIE",
				de: "KIND"
			},
			effect: {
				en: "Once during your turn (before your attack), you may remove 2 damage counters from 1 of the Defending Pokémon.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez retirer 2 marqueurs de dégât à 1 des Pokémon Défenseurs.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du 2 Schadensmarken von 1 Verteidigenden Pokémon entfernen."
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
				de: "Kraftreserve"
			},

			damage: 20,

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
