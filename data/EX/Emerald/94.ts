import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "Dusclops ex",
		fr: "Teraclope ex",
		de: "Zwirrklop ex"
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
		en: "Duskull",
		fr: "Skelénox"
	},

	suffix: "EX",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Dark Hole",
				fr: "Trou obscur",
				de: "Dark Hole"
			},
			effect: {
				en: "As long as Dusclops ex is on your Bench, don't apply Darkness Weakness for all of your Pokémon in play.",
				fr: "Tant que Teraclope ex est sur votre Banc, vous ne pouvez pas appliquer la Faiblesse  aux Pokémon que vous avez en jeu.",
				de: "As long as Dusclops ex is on your Bench, don't apply  Weakness for all of your Pokémon in play."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Shadow Beam",
				fr: "Rayon d'ombre",
				de: "Shadow Beam"
			},
			effect: {
				en: "Put 2 damage counters on the Defending Pokémon for each Energy attached to Dusclops ex.",
				fr: "Placez 2 marqueurs de dégât sur le Pokémon Défenseur pour chaque Énergie attachée à Teraclope ex.",
				de: "Put 2 damage counters on the Defending Pokémon for each Energy attached to Dusclops ex."
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
		},
	]
}

export default card
