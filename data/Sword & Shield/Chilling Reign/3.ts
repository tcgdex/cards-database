import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Beedrill",
		fr: "Dardargnan"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	evolveFrom: {
		en: "Kakuna",
		fr: "Coconfort"
	},

	attacks: [{
		name: {
			en: "Persist Sting",
			fr: "Dard Durable"
		},

		effect: {
			en: "If your opponent’s Active Pokémon has any Special Energy attached, it is Knocked Out.",
			fr: "Si de l’Énergie spéciale est attachée au Pokémon Actif de votre adversaire, il est mis K.O."
		},

		cost: ["Grass"]
	}, {
		name: {
			en: "Jet Spear",
			fr: "Lance Projetée"
		},

		effect: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon."
		},

		damage: 110,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card