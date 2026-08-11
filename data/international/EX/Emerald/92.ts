import { Card } from 'models/database/card'
import Set from '../Emerald'

const card: Card = {
	name: {
		'en-us': "Camerupt ex",
		'fr-fr': "Camerupt ex",
		'de-de': "Camerupt ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		323,
	],

	hp: 120,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Numel",
		'fr-fr': "Chamallot"
	},

	suffix: "ex",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Magma Armor",
				'fr-fr': "Magmascudo",
				'de-de': "Magma Armor"
			},
			effect: {
				'en-us': "Camerupt ex can't be Asleep or Paralyzed.",
				'fr-fr': "Camerupt ex ne peut pas être Endormi ou Paralysé.",
				'de-de': "Camerupt ex can't be Asleep or Paralyzed."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Searing Flame",
				'fr-fr': "Flammes calcinantes",
				'de-de': "Searing Flame"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Burned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Brûlé.",
				'de-de': "The Defending Pokémon is now Burned."
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Eruption",
				'fr-fr': "Éruption",
				'de-de': "Erruption"
			},
			effect: {
				'en-us': "Each player discards the top card of his or her deck. This attack does 60 damage plus 20 more damage for each Energy card discarded in this way.",
				'fr-fr': "Chaque joueur défausse la carte du dessus de son deck. Cette attaque inflige 60 dégâts plus 20 dégâts supplémentaires pour chaque carte Énergie défaussée de cette façon.",
				'de-de': "Each player discards the top card of his or her deck. This attack does 60 damage plus 20 more damage for each Energy card discarded in this way."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		tcgplayer: 84096,
		cardmarket: 276603
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 84096,
				cardmarket: 276603
			},
		},
	],
}

export default card
