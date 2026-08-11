import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		'en-us': "Rocket's Persian ex",
		'fr-fr': "Persian ex de Rocket",
		'de-de': "Rockets Snobilikat ex"
	},

	suffix: "ex",
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		53,
	],

	hp: 100,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Rocket's Meowth",
		'fr-fr': "Miaouss de Rocket"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Night Cry",
				'fr-fr': "Cri nocturne",
				'de-de': "Night Cry"
			},
			effect: {
				'en-us': "Once during your turn, if Rocket's Persian ex is on your Bench, you may search your deck for a Pokémon with Dark or Rocket's in its name. Show it to your opponent and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Une seule fois lors de votre tour, si Persian ex de Rocket est sur votre Banc, vous pouvez chercher dans votre deck un Pokémon dont le nom comporte Obscur ou Rocket. Montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck.",
				'de-de': "Once during your turn, if Rocket's Persian ex is on your Bench, you may search your deck for a Pokémon with Dark or Rocket's in its name. Show it to your opponent and put it into your hand. Shuffle your deck afterward."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Toxic Claws",
				'fr-fr': "Griffes toxiques",
				'de-de': "Toxic Claws"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned. Put 2 damage counters instead of 1 on the Defending Pokémon between turns.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné. Placez 2 marqueurs de dégât au lieu d'1 sur le Pokémon Défenseur entre deux tours.",
				'de-de': "The Defending Pokémon is now Poisoned. Put 2 damage counters instead of 1 on the Defending Pokémon between turns."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 88783,
				cardmarket: 276762
			},
		},
	],
}

export default card
