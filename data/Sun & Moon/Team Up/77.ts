import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Kabuto",
		fr: "Kabuto",
	},
	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		140,
	],
	hp: 90,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Unidentified Fossil",
		fr: "Fossile Inconnu",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Ramming Shell",
				fr: "Impact Carapace",
			},
			effect: {
				en: "During your opponent's next turn, this Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 20 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
