import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Hydreigon",
		fr: "Trioxhydre"
	},

	illustrator: "Taira Akitsu",
	rarity: "Common",
	category: "Pokemon",
	hp: 160,
	types: ["Darkness"],

	evolveFrom: {
		en: "Zweilous",
		fr: "Diamat"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Dark Squall",
			fr: "Rafale Obscure"
		},

		effect: {
			en: "As often as you like during your turn, you may attach a Darkness Energy card from your hand to 1 of your Pokémon.",
			fr: "Autant de fois que vous le voulez pendant votre tour, vous pouvez attacher une carte Énergie Darkness de votre main à l’un de vos Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Pitch-Black Fangs",
			fr: "Crocs Nuit Noire"
		},

		damage: 130,
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3
}

export default card