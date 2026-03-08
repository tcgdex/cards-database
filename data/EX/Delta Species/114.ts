import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Azumarill",
		fr: "Azumarill",
		de: "Azumarill"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		184,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Marill",
		fr: "Marill"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Thick Fat",
				fr: "Isograisse",
				de: "Thick Fat"
			},
			effect: {
				en: "Any damage done to Azumarill by attacks from Fire Pokémon and Water Pokémon is reduced by 30 (after applying Weakness and Resistance).",
				fr: "Tous dégâts infligés à Azumarill par des attaques de Pokémon  et  sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
				de: "Any damage done to Azumarill by attacks from  Pokémon and  Pokémon is reduced by 30 (after applying Weakness and Resistance)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Water",
				"Water",
			],
			name: {
				en: "Bubblebeam",
				fr: "Bulles d'O",
				de: "Bubblebeam"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 276782,
		tcgplayer: 83683
	},

	variants: [
		{
			type: "holo"
		},
	]
}

export default card
