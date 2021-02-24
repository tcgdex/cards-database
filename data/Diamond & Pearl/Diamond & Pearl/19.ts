import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Beautifly",
		fr: "Charmillon",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		267,
	],
	hp: 100,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Silcoon",
		fr: "Armulys",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Whirlwind",
				fr: "Cyclone",
			},
			effect: {
				en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Votre adversaire échange le Pokémon Défenseur avec 1 des Pokémon de son Banc.",
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Giga Drain",
				fr: "Giga-sangsue",
			},
			effect: {
				en: "After your attack, remove from Beautifly the number of damage counters equal to the damage you did to the Defending Pokémon.",
				fr: "Après votre attaque, retirez à Charmillon autant de marqueurs de dégât que vous avez infligé de dégâts au Pokémon Défenseur.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
