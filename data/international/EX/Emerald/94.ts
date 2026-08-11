import { Card } from 'models/database/card'
import Set from '../Emerald'

const card: Card = {
	name: {
		'en-us': "Dusclops ex",
		'fr-fr': "Teraclope ex",
		'de-de': "Zwirrklop ex"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		356,
	],

	hp: 100,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Duskull",
		'fr-fr': "Skelénox"
	},

	suffix: "ex",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Dark Hole",
				'fr-fr': "Trou obscur",
				'de-de': "Dark Hole"
			},
			effect: {
				'en-us': "As long as Dusclops ex is on your Bench, don't apply Darkness Weakness for all of your Pokémon in play.",
				'fr-fr': "Tant que Teraclope ex est sur votre Banc, vous ne pouvez pas appliquer la Faiblesse  aux Pokémon que vous avez en jeu.",
				'de-de': "As long as Dusclops ex is on your Bench, don't apply  Weakness for all of your Pokémon in play."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Shadow Beam",
				'fr-fr': "Rayon d'ombre",
				'de-de': "Shadow Beam"
			},
			effect: {
				'en-us': "Put 2 damage counters on the Defending Pokémon for each Energy attached to Dusclops ex.",
				'fr-fr': "Placez 2 marqueurs de dégât sur le Pokémon Défenseur pour chaque Énergie attachée à Teraclope ex.",
				'de-de': "Put 2 damage counters on the Defending Pokémon for each Energy attached to Dusclops ex."
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
		{
			type: "Colorless",
			value: "-30"
		},
	],

	
	retreat: 2,

	thirdParty: {
		tcgplayer: 85032,
		cardmarket: 276605
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 85032,
				cardmarket: 276605
			},
		},
	],
}

export default card
