import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Roselia",
		'fr-fr': "Roselia",
		'de-de': "Roselia"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [315],

	hp: 60,

	types: [
		"Grass"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Thick Skin",
				'fr-fr': "Dur à cuir",
				'de-de': "Dicke Haut"
			},
			effect: {
				'en-us': "Roselia can't be affected by any Special Conditions.",
				'fr-fr': "Roselia ne peut pas être affectée par un État spécial.",
				'de-de': "Roselia kann nicht von speziellen Zuständen betroffen werden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Speed Growth",
				'fr-fr': "Engrais rapide",
				'de-de': "Schnelles Wachstum"
			},
			effect: {
				'en-us': "Attach up to 2 Grass Energy cards from your hand to your Pokémon in any way you like.",
				'fr-fr': "Attachez jusqu'à deux cartes Énergie  de votre main à vos Pokémon de la façon que vous voulez.",
				'de-de': "Lege bis zu 2  Energiekarten von deiner Hand an deine Pokémon an."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Sleep Powder",
				'fr-fr': "Poudre dodo",
				'de-de': "Schlafpuder"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Das verteidigende Pokémon schläft jetzt."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 88817,
				cardmarket: 275886
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 88817,
				cardmarket: 275886
			},
		},
	],

}

export default card
