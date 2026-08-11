import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Altaria",
		'fr-fr': "Altaria",
		'de-de': "Altaria"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [334],

	hp: 80,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Swablu",
		'fr-fr': "Tylton"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Dragon Dance",
				'fr-fr': "Danse de dragon",
				'de-de': "Dragon Dance"
			},
			effect: {
				'en-us': "During your next turn, if any of your current Active Pokémon does damage to any Defending Pokémon, this attack does 40 more damage (before applying Weakness and Resistance).",
				'fr-fr': "Lors de votre prochain tour, si un de vos Pokémon Actifs inflige des dégâts à un des Pokémon Défenseurs, cette attaque inflige 40 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
				'de-de': "During your next turn, if any of your current Active Pokémon does damage to any Defending Pokémon, the attack does 40 more damage (before applying Weakness and Resistance)."
			},

		},
		{
			cost: [
				"Water",
				"Lightning",
			],
			name: {
				'en-us': "Dragon Song",
				'fr-fr': "Chanson de dragon",
				'de-de': "Dragon Song"
			},
			effect: {
				'en-us': "Each Defending Pokémon is now Asleep.",
				'fr-fr': "Chaque Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Each Defending Pokémon is now Asleep."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 83513,
				cardmarket: 275879
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 83513,
				cardmarket: 275879
			},
		},
	],

}

export default card
