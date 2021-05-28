import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Scrafty",
		fr: "Baggaïd",
	},
	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		560,
	],
	hp: 90,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Scraggy",
		fr: "Baggiguane",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Rock Head",
				fr: "Tête de Roc",
			},
			effect: {
				en: "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hammer Kick",
				fr: "Marto-Pied",
			},
			effect: {
				en: "If this Pokémon has fewer remaining HP than the Defending Pokémon, this attack does 30 more damage.",
				fr: "S'il reste moins de PV à ce Pokémon qu'au Pokémon Défenseur, cette attaque inflige 30 dégâts supplémentaires.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
