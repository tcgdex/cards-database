import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Bronzong",
		fr: "Archéodong"
	},

	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	evolveFrom: {
		en: "Bronzor",
		fr: "Archéomire"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Metal Transfer",
			fr: "Transfert de Métal"
		},

		effect: {
			en: "As often as you like during your turn, you may move a Metal Energy from 1 of your Pokémon to another of your Pokémon.",
			fr: "Autant de fois que vous le voulez pendant votre tour, vous pouvez déplacer une Énergie Metal de l’un de vos Pokémon vers un autre de vos Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Zen Headbutt",
			fr: "Psykoud’Boul"
		},

		damage: 70,
		cost: ["Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card