import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Gengar",
		fr: "Ectoplasma"
	},

	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	evolveFrom: {
		en: "Haunter",
		fr: "Spectrum"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Life Shaker",
			fr: "Chamboule Vie"
		},

		effect: {
			en: "As often as you like during your turn, you may move 1 damage counter from 1 of your Psychic Pokémon to another of your Psychic Pokémon.",
			fr: "Autant de fois que vous le voulez pendant votre tour, vous pouvez déplacer un marqueur de dégâts de l’un de vos Pokémon Psychic vers un autre de vos Pokémon Psychic."
		}
	}],

	attacks: [{
		name: {
			en: "Hypnoblast",
			fr: "Hypnoblast"
		},

		effect: {
			en: "Your opponent’s Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi."
		},

		damage: 90,
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2
}

export default card