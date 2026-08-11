import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Salamence",
		'fr-fr': "Drattak",
		'de-de': "Brutalanda"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [373],

	hp: 100,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Shelgon",
		'fr-fr': "Drackhaus"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Intimidating Fang",
				'fr-fr': "Croc intimidant",
				'de-de': "Intimidating Fang"
			},
			effect: {
				'en-us': "As long as Salamence is your Active Pokémon, any damage done to your Pokémon by an opponent's attack is reduced by 10 (before applying Weakness and Resistance).",
				'fr-fr': "Tant que Drattak est votre Pokémon Actif, les dégâts qui lui sont infligés par une attaque de votre adversaire sont réduits de 10 (avant application de la Faiblesse et de la Résistance).",
				'de-de': "As long as Salamence is your Active Pokémon, any damage done to your Pokémon by an opponent's attack is reduced by 10 (before applying Weakness and Resistance)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Dragon Flame",
				'fr-fr': "Flamme de dragon",
				'de-de': "Dragon Flame"
			},
			effect: {
				'en-us': "You may discard an Energy card attached to Salamence. If you do, this attack does 40 damage plus 20 more damage.",
				'fr-fr': "Vous pouvez défausser une carte Énergie attachée à Drattak. Cette attaque inflige alors 60 dégâts.",
				'de-de': "You may discard an Energy card attached to Salamence. If you do, this attack does 40 damage plus 20 more damage."
			},
			damage: "40+",

		},
	],


	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88896,
				cardmarket: 280584
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 88896,
				cardmarket: 280584
			},
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				tcgplayer: 213023,
				cardmarket: 280584
			},
		},
		{
			type: "holo",
			foil: "cosmos",
			stamp: ["winner"],
			thirdParty: {
				tcgplayer: 213024,
				cardmarket: 280584
			},
		},
	],

}

export default card
