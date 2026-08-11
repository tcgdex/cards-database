import { Card } from 'models/database/card'
import Set from '../Emerald'

const card: Card = {
	name: {
		'en-us': "Blaziken",
		'fr-fr': "Brasegali",
		'de-de': "Lohgock"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		257,
	],

	hp: 110,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Combusken",
		'fr-fr': "Galifeu"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Blaze",
				'fr-fr': "Brasier",
				'de-de': "Blaze"
			},
			effect: {
				'en-us': "As long as Blaziken's remaining HP is 40 or less, Blaziken does 40 more damage to the Defending Pokémon (before applying Weakness and Resistance).",
				'fr-fr': "Tant que Brasegali possède 40 Points de vie ou moins, il inflige 40 dégâts supplémentaires au Pokémon Défenseur (avant application de la Faiblesse et de la Résistance).",
				'de-de': "As long as Blaziken's remainingHP is 40 or less,Blaziken does 40 damage to the Defending Pokémon ( before applying Weakness and Resistance"
			},
		},
	],

	attacks: [
		{
			cost: [
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
			damage: 10,

		},
		{
			name: {
				'en-us': "Damage Burn",
				'fr-fr': "Dégâts brûlants",
				'de-de': "Damage Burn"
			},

			effect: {
				'en-us': "If the Defending Pokémon already has any damage counters on it, this attack does 50 damage plus 20 more damage.",
				'fr-fr': "Si le Pokémon Défenseur possède déjà des marqueurs de dégât, cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "If the Defending Pokémon already has any Damage counters on it, this attack does 50 damage plus 20 more damage."
			},

			damage: "50+",
			cost: ["Fire", "Fire", "Colorless"]
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
		tcgplayer: 83906,
		cardmarket: 276512
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 83906,
				cardmarket: 276512
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 83906,
				cardmarket: 276512
			},
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 97710,
			},
		},
	],
}

export default card
