import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Forretress",
		'fr-fr': "Foretress",
		'de-de': "Forstellka"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [205],

	hp: 80,

	types: [
		"Metal"
	],

	evolveFrom: {
		'en-us': "Pineco",
		'fr-fr': "Pomdepik"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Double Metal Ball",
				'fr-fr': "Double boule métallique",
				'de-de': "Double Metal Ball"
			},
			effect: {
				'en-us': "Put 2 damage counters on each Defending Pokémon.",
				'fr-fr': "Placez deux marqueurs de dégât sur chaque Pokémon Défenseur.",
				'de-de': "Put 2 damage counters on each Defending Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Backspin",
				'fr-fr': "Retour arrière",
				'de-de': "Backspin"
			},
			effect: {
				'en-us': "After your attack, you may discard 1 Energy card attached to Forretress. If you do, switch Forretress with 1 of your Benched Pokémon.",
				'fr-fr': "Après votre attaque, vous pouvez défausser une carte Énergie attachée à Foretress. Vous pouvez alors échanger Foretress avec un des Pokémon de votre Banc.",
				'de-de': "After your attack, you may discard 1 Energy card attached to Forretress. If you do, swich Forretress with 1 of your benched Pokémon."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],
	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85547,
				cardmarket: 275905
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85547,
				cardmarket: 275905
			},
		},
	],

}

export default card
