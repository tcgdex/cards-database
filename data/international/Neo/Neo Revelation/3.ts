import { Card } from 'models/database/card'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		'en-us': "Celebi",
		'fr-fr': "Celebi",
		'de-de': "Celebi"
	},

	illustrator: "Hironobu Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		251,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'en-us': "Time Travel",
				'fr-fr': "Voyage temporel",
				'de-de': "Time Travel"
			},
			effect: {
				'en-us': "If an opponent's attack would Knock Out Celebi, flip a coin. If heads, Celebi is not Knocked Out and you shuffle it and all cards attached to it into your deck. This power doesn't work if Celebi is already Asleep, Confused, or Paralyzed.",
				'fr-fr': "Si l'attaque d'un adversaire doit mettre Celebi K.O., lancez une pièce. Si c'est face, Celebi n'est pas K.O. et il doit être mélangé à votre deck avec les cartes qui lui sont attachées. Ce pouvoir ne peut être utilisé si Celebi est déjà Endormi, Confus ou Paralysé.",
				'de-de': "If an opponent's attack would Knock Out Celebi, flip a coin. If heads, Celebi isn't Knocked Out and you shuffle it and all cards attached to it into your deck. This power doesn't work if Celebi is already Asleep, Confused, or Paralyzed."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Psychic Damage",
				'fr-fr': "Dégâts Psy",
				'de-de': "Psychic Damage"
			},
			effect: {
				'en-us': "Flip 3 coins. For each heads, put 1 damage counter on the Defending Pokémon.",
				'fr-fr': "Lancez 3 pièces. Pour chaque face, placez 1 marqueur de dégâts sur le Pokémon Défenseur.",
				'de-de': "Flip 3 coins. For each heads, put 1 damage counter on the Defending Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "This Pokémon wanders across time. Grass and trees flourish in the forests in which it has appeared.",
		'fr-fr': "Ce Pokémon voyage dans le temps. Les arbres et la végétation s'épanouissent dans les forêts où il apparaît."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274589,
				tcgplayer: 84141
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274589,
				tcgplayer: 84141
			}
		}
	]
}

export default card
