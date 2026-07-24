import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Magneton",
		fr: "Pichu",
		de: "Pichu"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [82],

	hp: 70,

	types: [
		"Metal"
	],

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Magnetic Flow",
			},
			effect: {
				en: "Once during your turn (before your attack), if Magneton is your Active Pokémon, you may flip a coin. If heads, choose 2 of your opponent's Pokémon that have Energy cards attached to them. Choose 1 of the Energy cards attached to each of those Pokémon and switch them between the Pokémon. This power can't be used if Magneton is affected by a Special Condition.",
			},
		},
	],,
	stage: "Stage1",

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],,
	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],,
	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Steel Wave",
				fr: "Rajout d'énergie",
				de: "Energieflicken"
			},
			effect: {
				en: "This attack does 10 damage to each of your opponent's Benched Pokémon that are the same type (color) as the Defending Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Prenez une carte Énergie de base attachée à l'un de vos Pokémon et attachez-la à un autre de vos Pokémon.",
				de: "Nimm eine Basis-Energiekarte, die an 1 deiner Pokémon angelegt ist, und lege sie an ein anderes deiner Pokémon an."
			},

		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 88013,
				cardmarket: 274897
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
