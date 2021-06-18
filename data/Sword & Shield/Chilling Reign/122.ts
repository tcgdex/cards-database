import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Kecleon",
		fr: "Kecleon"
	},

	illustrator: "KIYOTAKA OSHIYAMA",
	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	abilities: [{
		type: "Ability",

		name: {
			en: "Chromashift",
			fr: "Chromutation"
		},

		effect: {
			en: "This Pokémon is the same type as any basic Energy attached to it. (If it has 2 or more different types of basic Energy attached, this Pokémon is each of those types.)",
			fr: "Ce Pokémon est du même type que l’Énergie de base qui lui est attachée. (Si de l’Énergie de base de 2 types différents ou plus est attachée à ce Pokémon, ce Pokémon est de chacun de ces types.)"
		}
	}],

	attacks: [{
		name: {
			en: "Spinning Attack",
			fr: "Attaque Tournante"
		},

		damage: 90,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card