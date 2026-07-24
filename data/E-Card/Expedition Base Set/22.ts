import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Pichu",
		fr: "Pichu",
		de: "Pichu"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [172],

	hp: 30,

	types: [
		"Lightning"
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
	],
	stage: "Baby",

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Energy Patch",
				fr: "Rajout d'énergie",
				de: "Energieflicken"
			},
			effect: {
				en: "Take a basic Energy card attached to 1 of your Pokémon and attach it to another of your Pokémon.",
				fr: "Prenez une carte Énergie de base attachée à l'un de vos Pokémon et attachez-la à un autre de vos Pokémon.",
				de: "Nimm eine Basis-Energiekarte, die an 1 deiner Pokémon angelegt ist, und lege sie an ein anderes deiner Pokémon an."
			},

		},
	],

	retreat: 1,

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
			thirdParty: {
				tcgplayer: 88013,
				cardmarket: 274897
			},
		},
	],
}

export default card
