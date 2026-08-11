import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Charizard",
		'fr-fr': "Dracaufeu",
		'de-de': "Glurak"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [6],

	hp: 120,

	types: [
		"Fire"
	],

	evolveFrom: {
		'en-us': "Charmeleon",
		'fr-fr': "Reptincel"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Collect Fire",
				'fr-fr': "Quête du feu",
				'de-de': "Collect Fire"
			},
			effect: {
				'en-us': "Flip a coin. If heads, search your discard pile for 2 Fire Energy cards and attach them to Charizard (1 if there is only 1).",
				'fr-fr': "Lancez une pièce. Si c'est face, cherchez dans votre pile de défausse deux cartes Énergie  (ou une s'il n'y en a qu'une) et attachez-les à Dracaufeu.",
				'de-de': "Flip a coin. If heads, search your dicard pile for 2  Energy cards and attach them to Charizard (1 if there is only 1)."
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Flame Pillar",
				'fr-fr': "Colonne de flamme",
				'de-de': "Flame Pillar"
			},
			effect: {
				'en-us': "You may discard a Fire Energy card attached to Charizard. If you do, choose 1 of your opponent's Benched Pokémon and do 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Vous pouvez défausser une carte Énergie  attachée à Dracaufeu. Vous pouvez alors choisir un des Pokémon de Banc de votre adversaire et lui infliger 30 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc.)",
				'de-de': "You may discard a  Energy card attached to Charizard, If you do, choose 1 of your opponent's Benched Pokémon and do 30 damage to that Pokémon. (Don't apply Weakness and resistance for Benched Pokémon.)"
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 84187,
				cardmarket: 275977
			},
		},
		{
			type: "holo",
			stamp: ["national-championships"],
			thirdParty: {
				tcgplayer: 489929,
				cardmarket: 275977
			},
		},
	],

}

export default card
