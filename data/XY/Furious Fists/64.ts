import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Hawlucha EX",
		fr: "Brutalibré EEX",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		701,
	],
	hp: 130,
	types: [
		"Fighting",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Counterattack",
				fr: "Contre-Attaque",
			},
			effect: {
				en: "If this Pokémon is your Active Pokémon and is damaged by an opponent’s attack (even if this Pokémon is Knocked Out), put 2 damage counters on the Attacking Pokémon.",
				fr: "Si ce Pokémon est votre Pokémon Actif et qu’il subit les dégâts d’une attaque de votre adversaire (même si ce Pokémon est mis K.O.), placez 2 marqueurs de dégâts sur le Pokémon Attaquant.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Moonsault Stomp",
				fr: "Piétinage Sélénite",
			},
			effect: {
				en: "If there is any Stadium card in play, this attack does 40 more damage.",
				fr: "S’il y a une carte Stade en jeu, cette attaque inflige 40 dégâts supplémentaires.",
			},
			damage: "60+",

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
	retreat: 1,



}

export default card
