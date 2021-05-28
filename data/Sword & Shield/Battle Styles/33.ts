import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Kingdra",
		fr: "Hyporoi"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	evolveFrom: {
		en: "Seadra",
		fr: "Hypocéan"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Deep Sea King",
			fr: "Roi des Abysses"
		},

		effect: {
			en: "When your Active Pokémon is Knocked Out by damage from an attack from your opponent’s Pokémon, you may move any amount of Water Energy from that Pokémon to this Pokémon.",
			fr: "Lorsque votre Pokémon Actif est mis K.O. par les dégâts d’une attaque de l’un des Pokémon de votre adversaire, vous pouvez déplacer autant d’Énergie Water que vous le voulez de ce Pokémon-là vers celui-ci."
		}
	}],

	attacks: [{
		name: {
			en: "Aqua Burst",
			fr: "Éclat Aquatique"
		},

		effect: {
			en: "This attack does 40 damage for each Water Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 40 dégâts pour chaque Énergie Water attachée à ce Pokémon."
		},

		damage: "40×",
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card