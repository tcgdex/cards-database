import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Roselia",
		fr: "Roselia"
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
				fr: "Dur à cuir"
			},
			effect: {
				en: "Roselia can't be affected by any Special Conditions.",
				fr: "Roselia ne peut pas être affectée par un État spécial."
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
				fr: "Engrais rapide"
			},
			effect: {
				en: "Attach up to 2 Grass Energy cards from your hand to your Pokémon in any way you like.",
				fr: "Attachez jusqu'à deux cartes Énergie  de votre main à vos Pokémon de la façon que vous voulez."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Sleep Powder",
				fr: "Poudre dodo"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi."
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





}

export default card
