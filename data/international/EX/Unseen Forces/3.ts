import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		'en-us': "Bellossom",
		'fr-fr': "Joliflor",
		'de-de': "Blubella"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		182,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Gloom",
		'fr-fr': "Ortide"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Green Dance",
				'fr-fr': "Danse verte",
				'de-de': "Green Dance"
			},
			effect: {
				'en-us': "Search your deck for up to 2 Grass Pokémon, show them to your opponent, and put them into your hand. Shuffle your deck afterward. If you put any Grass Pokémon into your hand, you may switch Bellossom with 1 of your Benched Pokémon.",
				'fr-fr': "Choisissez dans votre deck jusqu'à 2 Pokémon , montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck. Si vous placez un Pokémon  dans votre main, vous pouvez échanger Joliflor avec 1 des Pokémon de votre Banc.",
				'de-de': "Search your deck for up to 2  Pokémon, show them to your opponent, and put them into your hand. Shuffle your deck afterward. If you put any  Pokémon into your hand, you may switch Bellossom with 1 of your Benched Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Full Bloom",
				'fr-fr': "Épanouissement",
				'de-de': "Full Bloom"
			},
			effect: {
				'en-us': "If you have at least 3 Bellossom in play, this attack does 50 damage plus 50 more damage.",
				'fr-fr': "Si vous avez au moins 3 Joliflor en jeu, cette attaque inflige 50 dégâts plus 50 dégâts supplémentaires.",
				'de-de': "If you have at least 3 Bellossom in play, this attack does 50 damage plus 50 more damage."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 83799,
				cardmarket: 276649
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 83799,
				cardmarket: 276649
			},
		}
	],
}

export default card
