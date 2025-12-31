import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Celebi",
		fr: "Celebi",
		de: "Celebi"
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
				en: "Time Travel",
				fr: "Voyage temporel",
				de: "Time Travel"
			},
			effect: {
				en: "If an opponent's attack would Knock Out Celebi, flip a coin. If heads, Celebi is not Knocked Out and you shuffle it and all cards attached to it into your deck. This power doesn't work if Celebi is already Asleep, Confused, or Paralyzed.",
				fr: "Si l'attaque d'un adversaire doit mettre Celebi K.O., lancez une pièce. Si c'est face, Celebi n'est pas K.O. et il doit être mélangé à votre deck avec les cartes qui lui sont attachées. Ce pouvoir ne peut être utilisé si Celebi est déjà Endormi, Confus ou Paralysé.",
				de: "If an opponent's attack would Knock Out Celebi, flip a coin. If heads, Celebi isn't Knocked Out and you shuffle it and all cards attached to it into your deck. This power doesn't work if Celebi is already Asleep, Confused, or Paralyzed."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Psychic Damage",
				fr: "Dégâts Psy",
				de: "Psychic Damage"
			},
			effect: {
				en: "Flip 3 coins. For each heads, put 1 damage counter on the Defending Pokémon.",
				fr: "Lancez 3 pièces. Pour chaque face, placez 1 marqueur de dégâts sur le Pokémon Défenseur.",
				de: "Flip 3 coins. For each heads, put 1 damage counter on the Defending Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "Ce Pokémon voyage dans le temps. Les arbres et la végétation s'épanouissent dans les forêts où il apparaît."
	},

	thirdParty: {
		cardmarket: 274589,
		tcgplayer: 84141
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["1st-edition"]
		}
	]
}

export default card
