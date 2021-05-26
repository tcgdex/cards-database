import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Grapploct",
		fr: "Krakos"
	},
	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 130,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Clobbopus",
		fr: "Poulpaf"
	},



	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Full Nelson",
				fr: "Double Nelson"
			},
			effect: {
				en: "During your opponent’s next turn, the Defending Pokémon can’t retreat.",
				fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite."
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Tentacle Buster",
				fr: "Buster Tentaculaire"
			},
			effect: {
				en: "If this Pokémon used Full Nelson during your last turn, this attack does 120 more damage.",
				fr: "Si ce Pokémon a utilisé Double Nelson pendant votre dernier tour, cette attaque inflige 120 dégâts supplémentaires."
			},
			damage: "50+",

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
