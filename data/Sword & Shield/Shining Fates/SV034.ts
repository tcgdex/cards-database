import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Beldeneige",
		en: "Frosmoth"
	},

	illustrator: "Akira Komayama",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		fr: "Frissonille",
		en: "Snom"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Danse de Glace",
			en: "Ice Dance"
		},

		effect: {
			fr: "Autant de fois que vous le voulez pendant votre tour, vous pouvez attacher une carte Énergie Water de votre main à l’un de vos Pokémon Water de Banc.",
			en: "As often as you like during your turn, you may attach a Water Energy card from your hand to 1 of your Benched Water Pokémon."
		}
	}],

	attacks: [{
		name: {
			fr: "Onde Boréale",
			en: "Aurora Beam"
		},

		damage: 30,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card