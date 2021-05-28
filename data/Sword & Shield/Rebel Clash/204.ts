import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Frosmoth",
		fr: "Beldeneige"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		en: "Snom",
		fr: "Frissonille"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Ice Dance",
			fr: "Danse de Glace"
		},

		effect: {
			en: "As often as you like during your turn, you may attach a Water Energy card from your hand to 1 of your Benched Water Pokémon.",
			fr: "Autant de fois que vous le voulez pendant votre tour, vous pouvez attacher une carte Énergie Water de votre main à l’un de vos Pokémon Water de Banc."
		}
	}],

	attacks: [{
		name: {
			en: "Aurora Beam",
			fr: "Onde Boréale"
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