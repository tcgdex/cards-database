import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Shining Ho-Oh",
		fr: "Ho-Oh Brillant",
	},
	illustrator: "Hitoshi Ariga",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		250,
	],
	hp: 130,
	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Golden Wing",
				fr: "Aile Dorée",
			},
			effect: {
				en: "If this Pokémon is your Active Pokémon and is Knocked Out by damage from an opponent's attack, move up to 2 basic Energy cards from this Pokémon to your Benched Pokémon in any way you like.",
				fr: "Si ce Pokémon est votre Pokémon Actif et qu’il est mis K.O. par les dégâts d’une attaque de votre adversaire, déplacez jusqu’à 2 cartes Énergie de base de ce Pokémon sur vos Pokémon de Banc, de la manière que vous voulez.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fire Blast",
				fr: "Déflagration",
			},
			effect: {
				en: "Discard an Energy from this Pokémon.",
				fr: "Défaussez une Énergie de ce Pokémon.",
			},
			damage: 110,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
