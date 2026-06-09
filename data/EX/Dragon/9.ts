import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Roselia",
		fr: "Roselia",
		de: "Roselia"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		315,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Thick Skin",
				fr: "Dur à cuir",
				de: "Dicke Haut"
			},
			effect: {
				en: "Roselia can't be affected by any Special Conditions.",
				fr: "Roselia ne peut pas être affectée par un État spécial.",
				de: "Roselia kann nicht von speziellen Zuständen betroffen werden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Speed Growth",
				fr: "Engrais rapide",
				de: "Schnelles Wachstum"
			},
			effect: {
				en: "Attach up to 2 Grass Energy cards from your hand to your Pokémon in any way you like.",
				fr: "Attachez jusqu'à deux cartes Énergie  de votre main à vos Pokémon de la façon que vous voulez.",
				de: "Lege bis zu 2  Energiekarten von deiner Hand an deine Pokémon an."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Sleep Powder",
				fr: "Poudre dodo",
				de: "Schlafpuder"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "Das verteidigende Pokémon schläft jetzt."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 275886,
		tcgplayer: 88817
	}
}

export default card
