import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Breloom",
		fr: "Chapignon",
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		286,
	],
	hp: 90,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Shroomish",
		fr: "Balignon",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Hover Hit",
				fr: "Coup de voltige",
			},
			effect: {
				en: "The Retreat Cost for the Defending Pokémon is 0 until the end of your next turn.",
				fr: "Le Coût de retraite du Pokémon Défenseur est de 0 jusqu'à la fin de votre prochain tour.",
			},
			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Crash Bomber",
				fr: "Bombardier écrasant",
			},
			effect: {
				en: "If the Defending Pokémon has any Special Energy cards attached to it, this attack does 20 damage plus 40 more damage. Then, discard a Special Energy card attached to the Defending Pokémon.",
				fr: "Si le Pokémon Défenseur possède des cartes Énergie spéciales, cette attaque inflige 20 dégâts plus 40 dégâts supplémentaires. Ensuite, défaussez une carte Énergie spéciale attachée au Pokémon Défenseur.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
